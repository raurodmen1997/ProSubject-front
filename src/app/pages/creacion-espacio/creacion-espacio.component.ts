import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BusquedaAsignaturaService } from 'src/app/services/busqueda-asignatura/busqueda-asignatura.service';
import { GradoService, CursoService, AsignaturaService, FacultadService, EspacioService, ProfesorService } from 'src/app/services/services.index';


@Component({
  selector: 'app-creacion-espacio',
  templateUrl: './creacion-espacio.component.html',
  styleUrls: ['./creacion-espacio.component.css']
})
export class CreacionEspacioComponent implements OnInit {

  form:FormGroup;

  universidades: any[];
  facultades: any[];
  grados: any[];
  cursos: any[];
  asignaturas: any[];

  espacio: any = {
    alumnos: [],
    asignatura:{},
    foro:{},
    profesor:{},
    precio:'',
    capacidad :'',
    horarios:[]
  }

  diasSemana: any[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', "Sabado", "Domingo"]

  constructor(private fb: FormBuilder,
    private busquedaAsignaturaService: BusquedaAsignaturaService,
    private facultadService: FacultadService,
    private gradoService: GradoService,
    private cursoService: CursoService,
    private asignaturaService: AsignaturaService,
    private espacioService: EspacioService,
    private profesorService: ProfesorService) { }

  ngOnInit() {

    this.inicializarFormulario();

    this.busquedaAsignaturaService.getUniversidades().subscribe(data=>{
      this.universidades = data;
      console.log(this.universidades);

      this.cursoService.getCursos().subscribe(data=>{
        this.cursos = data;
        console.log(this.cursos);
      });
    });
  }

  inicializarFormulario(){
    //CAMPOS DEL FORMULARIO Y VALIDACIONES
    this.form = this.fb.group({
      universidad: new FormControl('', Validators.required),
      facultades: new FormControl('', Validators.required),
      grado: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      asignatura: new FormControl('', Validators.required),

      profesor: new FormControl('1'),

      precio: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]{1,}(\\.[0-9]{1,2})?$')]),
      capacidad: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+$")]),
      
      horarios: this.fb.array([
        this.fb.group({
          dia: new FormControl('', Validators.required),
          fechaInicio: new FormControl('', [Validators.required, Validators.pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9]$')]),
          fechaFin: new FormControl('', [Validators.required, Validators.pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9]$')])
        })
      ])
    })


    //CAMBIOS EN EL SELECT DE UNIVERSIDAD
    this.form.get('universidad').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.facultadService.getFacultadesPorUniversidad(this.form.get('universidad').value).subscribe(res=>{
          this.facultades = res;
        });
      }else{
        this.form.get('facultad').setValue('');
        this.facultades = [];
      }

    });

    //CAMBIO EN EL SELECT DE FACULTAD
    this.form.get('facultades').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.gradoService.getGradosPorUniversidadYFacultad(this.form.get('universidad').value, this.form.get('facultades').value).subscribe(res=>{
          this.grados = res;
        });
      }else{
        this.form.get('grado').setValue('');
        this.grados = [];
      }


    });

    //CAMBIO EN EL SELECT DE CURSO
    this.form.get('curso').valueChanges.subscribe(data=>{

      if(data !== ''){
        this.asignaturaService.getAsignaturasPorUniversidadYFacultadYGradoYCurso(this.form.get('universidad').value, this.form.get('facultades').value, this.form.get('grado').value, this.form.get('curso').value).subscribe(res=>{
          this.asignaturas = res;
        });
      }else{
        this.form.get('asignaturas').setValue('');
        this.asignaturas = [];
      }


    });
  }

  get horarios(){
    return this.form.get('horarios') as FormArray;
  }

  addNuevoHorario(){
    this.horarios.push(this.fb.group({
      dia: new FormControl(''),
      fechaInicio: new FormControl('', Validators.pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9]$')),
      fechaFin: new FormControl('', Validators.pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9]$'))
    }))
  }

  convertirFecha(){
    const horario = this.form.get('horarios').value;

    horario.forEach(element => {
      const horaInicio = element.fechaInicio.split(':');
      const horaFin = element.fechaFin.split(':');
      
      element.fechaInicio = new Date(2050,0,0,parseInt(horaInicio[0]), parseInt(horaInicio[1])).toISOString()
      element.fechaFin = new Date(2050,0,0, parseInt(horaFin[0]), parseInt(horaFin[1])).toISOString()

    });
  }

  crearEspacio(){
    this.asignaturaService.getAsignaturaPorId(this.form.get('asignatura').value).subscribe(
      res => this.espacio.asignatura = res,
      error => console.log(error)
    )

    this.profesorService.getProfesorPorId(this.form.get('profesor').value).subscribe(
      res => this.espacio.profesor = res,
      error => console.log(error)
    )

    this.espacio.capacidad = this.form.get('capacidad').value;
    this.espacio.precio = this.form.get('precio').value;
    
    console.log(this.espacio)
  }

  submit(){
    //this.convertirFecha()
    
    this.crearEspacio();

    this.espacioService.guardarEspacio(this.espacio).subscribe(
      res => console.log('Todo ok'),
      error => console.log(error)
    )
  }

}
