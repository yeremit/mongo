use instituto

db.createCollection("profesores")

db.profesores.insertMany([
    {
        nombre: 'yeremit',
        apellido: 'rodriguez',
        telefono: '3012466715',
        correo: 'yrodriguez@inst.edu.co',
        documento: '1000620334'
    },
    {
        nombre: 'eliana',
        apellido: 'cordoba',
        telefono: '301257668',
        correo: 'ecordo@insti.edu.co',
        documento: '1245625434'
    },
    {
        nombre: 'samuel',
        apellido: 'arias',
        telefono: '3105255766',
        correo: 'sarias@insti.edu.co',
        documento: '79973337'
    },
    {
        nombre: 'sergio',
        apellido: 'linares',
        telefono: '3641578',
        correo: 'slinares@insti.edu.co',
        documento: '1090111332'
    },
    {
        nombre: 'natalia',
        apellido: 'pineda',
        telefono: '5855716612',
        correo: 'npineda@insti.edu.co',
        documento: '3543987712'
    },
])

db.createCollection("cursos")

db.cursos.insertMany([
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e24"),
        nombre: 'software',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e25"),
        nombre: 'cocina',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e26"),
        nombre: 'matematicas',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e27"),
        nombre: 'fisica',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e28"),
        nombre: 'astronomia',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e24"),
        nombre: 'ingles',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e25"),
        nombre: 'español',
        creditos: '50'
    },
    {
        profesores: new ObjectId("5fc7051be864de1cd7060e26"),
        nombre: 'historia',
        creditos: '50'
    },
])

db.createCollection("estudiantes")

db.estudiantes.insertMany([
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c5"),
        nombre: 'michell',
        apellido: 'alvarez',
        telefono: '3102478715',
        correo: 'malvarez@inst.edu.co',
        documento: '5020620334'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c6"),
        nombre: 'pepe',
        apellido: 'elelel',
        telefono: '301257668',
        correo: 'pelelel@insti.edu.co',
        documento: '1245612334'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c7"),
        nombre: 'ete',
        apellido: 'seach',
        telefono: '3105255766',
        correo: 'eseach@insti.edu.co',
        documento: '79546337'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c8"),
        nombre: 'david',
        apellido: 'maduro',
        telefono: '31001578',
        correo: 'dmaduro@insti.edu.co',
        documento: '2790118332'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c9"),
        nombre: 'natalia',
        apellido: 'lopez',
        telefono: '5665716612',
        correo: 'nlopez@insti.edu.co',
        documento: '3544587712'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23ca"),
        nombre: 'mateo',
        apellido: 'mayorga',
        telefono: '3651013',
        correo: 'mmayorga@insti.edu.co',
        documento: '87773337'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23cb"),
        nombre: 'andrey',
        apellido: 'salazar',
        telefono: '6348467',
        correo: 'asalazar@insti.edu.co',
        documento: '52847768'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23cc"),
        nombre: 'amparo',
        apellido: 'rueda',
        telefono: '3012466715',
        correo: 'arueda@insti.edu.co',
        documento: '1000620331'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23cc"),
        nombre: 'cristian',
        apellido: 'runza',
        telefono: '3012466715',
        correo: 'crunza@insti.edu.co',
        documento: '1000620332'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23cb"),
        nombre: 'daniel',
        apellido: 'torres',
        telefono: '3012466715',
        correo: 'dtorres@insti.edu.co',
        documento: '1000620333'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23ca"),
        nombre: 'andres',
        apellido: 'serrato',
        telefono: '3012466715',
        correo: 'aserrato@insti.edu.co',
        documento: '1000620336'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c9"),
        nombre: 'santiago',
        apellido: 'florez',
        telefono: '301246675',
        correo: 'aflorez@insti.edu.co',
        documento: '1000620337'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c8"),
        nombre: 'felipe',
        apellido: 'blaco',
        telefono: '3012466715',
        correo: 'fblanco@insti.edu.co',
        documento: '1000620338'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c7"),
        nombre: 'niria',
        apellido: 'talero',
        telefono: '3012466715',
        correo: 'ntale@insti.edu.co',
        documento: '1000620339'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c6"),
        nombre: 'paola',
        apellido: 'tabares',
        telefono: '3012466715',
        correo: 'ptabares@insti.edu.co',
        documento: '1000620341'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c5"),
        nombre: 'erick',
        apellido: 'moreno',
        telefono: '3012466715',
        correo: 'emoreno@insti.edu.co',
        documento: '1000620342'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c6"),
        nombre: 'simon',
        apellido: 'rojas',
        telefono: '3012466715',
        correo: 'srojas@insti.edu.co',
        documento: '1000620343'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c7"),
        nombre: 'anderson',
        apellido: 'lopez',
        telefono: '3012466715',
        correo: 'alopez@insti.edu.co',
        documento: '1000620344'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c8"),
        nombre: 'esteban',
        apellido: 'velez',
        telefono: '3012466715',
        correo: 'evelez@insti.edu.co',
        documento: '1000620345'
    },
    {
        cursos: new ObjectId("5fc712ce1b576183c84f23c9"),
        nombre: 'brandon',
        apellido: 'toro',
        telefono: '3012466715',
        correo: 'btoro@insti.edu.co',
        documento: '1000620346'
    },
])


db.profesores.find().pretty()

db.estudiantes.find().pretty()

db.cursos.find().pretty()

db.cursos.find({"profesores": ObjectId("5fc7051be864de1cd7060e26")}).pretty()

db.estudiantes.find({"cursos": ObjectId("5fc712ce1b576183c84f23c9")}).pretty()
