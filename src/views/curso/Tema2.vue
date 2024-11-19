<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 1. Introducción a la Lógica y el Pensamiento Lógico'" :subTitulo="'2. Pensamiento lógico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center.flex-column
            div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4
              img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-19.svg', alt='Texto que describa la imagen')
              p.pe-xl-3(data-aos="fade-up") Las matemáticas tienen como objetivo central que el individuo desarrolle su razonamiento lógico para resolver los problemas que se le presenten en la vida, interpretar situaciones y aplicar soluciones adecuadas.
            p El psicólogo Jean Piaget (Santamaría, 2020) explica que, a medida que el individuo crece, utiliza representaciones cada vez más complejas para organizar la información que adquiere del entorno. Piaget clasifica el conocimiento en tres tipos:
          .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
            img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')  

        .row.mb-5.justify-content-center.align-items-stretch
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Conocimiento físico
              p.px-1.text-small.mb-0.d-flex.text-center  Aquel que la persona adquiere al interactuar con objetos del mundo exterior.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Conocimiento lógico-matemático
              p.px-1.text-small.mb-0.d-flex.text-center Se desarrolla mediante la abstracción y la reflexión; se construye en la mente a partir de la relación con los objetos y, una vez procesado, permanece en la memoria.
          .col-10.col-md-8.col-lg-6.col-xl-4
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Conocimiento social
              p.px-1.text-small.mb-0.d-flex.text-center Adquirido a través de la interacción con otras personas.

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rosa.p-4
        p.mb-0(data-aos="fade-up") De acuerdo con Piaget (1896-1980), el conocimiento lógico-matemático se vuelve más complejo a medida que los niños se desarrollan. Este conocimiento se construye inicialmente a partir del pensamiento concreto, basado en la experimentación con objetos tangibles y manipulables, lo que implica una reflexión sobre acciones reales. Posteriormente, los niños comienzan a trabajar con hipótesis e ideas y a formular teorías, lo cual caracteriza las operaciones formales, ya que representan acciones posibles <strong>(Concepto.de, s. f.)</strong>.

    .row.mb-4
      p Algunos ejemplos de pensamiento lógico son:

    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Cubo de Rubik 
              p Popular juguete de finales del siglo XX. Consiste en un cubo con seis caras de nueve cuadrados de colores, que se mezclan y deben recomponerse siguiendo secuencias y algoritmos específicos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="flip-up")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Puzzles o rompecabezas 
              p El armado de rompecabezas requiere analizar formas, colores y patrones para colocar cada pieza en su posición adecuada.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Acertijos 
              p Resolver acertijos implica un análisis estructurado de pistas y la identificación de relaciones para deducir la solución correcta.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Juegos de categorías 
              p Juegos en los que se ordenan objetos en categorías, estableciendo relaciones lógicas y considerando características comunes, como en “tutti frutti” o “stop”.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Matemáticas 
              p La resolución de ejercicios matemáticos aplica el pensamiento lógico-formal, utilizando fórmulas y algoritmos, identificando patrones y deduciendo soluciones en problemas de lógica.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Juegos de estrategia 
              p Este tipo de juegos, como el ajedrez, requieren anticipar movimientos futuros y considerar posibles acciones del adversario.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Planificación de un recorrido 
              p Implica calcular el tiempo necesario para desplazarse considerando factores como el tráfico o demoras en el transporte.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Organización 
              p Ordenar un espacio, como una estantería, exige analizar el espacio disponible y la cantidad de elementos, optimizando su disposición.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')  
    .row.mb-5
      p De acuerdo con lo anterior, el pensamiento lógico se define como la capacidad de razonar de forma coherente y estructurada, con el fin de llegar a conclusiones válidas a partir de la información disponible. Dentro del pensamiento lógico, se distinguen dos enfoques fundamentales: el razonamiento inductivo y el razonamiento deductivo. Ambos son esenciales en la toma de decisiones, la resolución de problemas y la construcción del conocimiento, aunque operan de maneras distintas.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Razonamiento deductivo

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4
        p.ps-xl-4.mb-0(data-aos="fade-up") El razonamiento deductivo es un método de pensamiento en el que partimos de premisas generales para llegar a conclusiones específicas. Funciona como un camino bien definido: si las premisas de partida son verdaderas, la conclusión también lo será. Por ejemplo, si afirmamos que "todos los mamíferos tienen corazón" (premisa general) y que "los perros son mamíferos" (premisa específica), podemos concluir que "los perros tienen corazón". En este caso, la veracidad de las premisas garantiza la veracidad de la conclusión.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    .row.mb-5
      h1 Estructura
      p El razonamiento deductivo se organiza comúnmente en silogismos, que son estructuras lógicas formadas por dos premisas (afirmaciones) y una conclusión. Un ejemplo de silogismo es:

    .row.mb-5.justify-content-center.align-items-stretch
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.align-items-center.p-3(data-aos="fade-right")
          img.pe-2(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
          p.px-1.text-small.mb-0.d-flex "Todos los humanos necesitan oxígeno para vivir" (primera premisa)
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.align-items-center.p-3(data-aos="fade-up")
          img.pe-2(src='@/assets/curso/unidad/img-34.svg', style="width: 80px")
          p.px-1.text-small.mb-0.d-flex "Ana es humana" (segunda premisa).
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.align-items-center.p-3(data-aos="fade-left")
          img.pe-2(src='@/assets/curso/unidad/img-35.svg', style="width: 80px")
          p.px-1.text-small.mb-0.d-flex Por lo tanto, "Ana necesita oxígeno para vivir" (conclusión).
 
    .row.mb-4
      p Este tipo de razonamiento es valioso porque asegura que nuestras conclusiones sean lógicas y precisas, siempre y cuando las premisas sean verdaderas.
      p.mb-4 Ejemplo clásico de silogismo

    .row.mb-5.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 1
            p.text-small.mb-0.d-flex Todos los humanos son mortales.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-down")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-37.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 2
            p.text-small.mb-0.d-flex Sócrates es humano.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-38.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Conclusión
            p.text-small.mb-0.d-flex Por lo tanto, Sócrates es mortal.
    
    .row.mb-5
      p.mb-4 En este ejemplo, partimos de premisas generales (todos los humanos son mortales) para llegar a una conclusión específica (Sócrates, siendo humano, también es mortal).
      p.text-bold.mb-4 Las características clave son:

      ImagenInfografica.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

        .tarjeta.bg-white.p-4(x="26.4%" y="76.5%" numero="+")
          .h5.mb-2 Validez
          p Un razonamiento deductivo es válido si la conclusión se deriva lógicamente de las premisas, independientemente de su veracidad. Ejemplo: “Todos los gatos vuelan” y “mi mascota es un gato” llevan a la conclusión “mi mascota vuela”, una conclusión válida por su estructura lógica.

        .tarjeta.bg-white.p-4(x="42%" y="23.5%" numero="+")
          .h5.mb-3 Verdad
          p Para que la conclusión sea verdadera, el razonamiento debe ser válido y las premisas deben ser correctas. Ejemplo: “Todos los peces viven en el agua” y “un tiburón es un pez” concluyen en “el tiburón vive en el agua”, siendo verdadera porque las premisas también lo son.

        .tarjeta.bg-white.p-4(x="58%" y="76.5%" numero="+")
          .h5.mb-3 Certeza
          p El razonamiento deductivo ofrece conclusiones seguras siempre que las premisas sean ciertas. Es como un rompecabezas en el que, si las piezas (premisas) encajan, la conclusión será totalmente confiable. 

        .tarjeta.bg-white.p-4(x="73.5%" y="22%" numero="+")
          .h5.mb-3 De lo general a lo específico 
          p El razonamiento deductivo parte de ideas generales y amplias para alcanzar conclusiones específicas. Ejemplo: sabiendo que “todos los pájaros tienen alas” y que “un gorrión es un pájaro”, se concluye que “el gorrión tiene alas”, una conclusión específica derivada de una premisa general.

    .row.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.pb-md-3

        .row
          p.mb-5.px-5.px-md-0 Las aplicaciones del razonamiento deductivo son: 
          .col-10.col-lg-6.col-lg-6.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Matemáticas
                p.text-small.px-4.text-center.pb-2 En matemáticas, el razonamiento deductivo es fundamental. Los teoremas se derivan de principios básicos o axiomas asumidos como verdaderos. A partir de estos axiomas, se aplican reglas lógicas para llegar a conclusiones específicas. Por ejemplo, en geometría, a partir del axioma "la suma de los ángulos de un triángulo es 180 grados", se pueden demostrar propiedades más complejas de figuras.
          .col-10.col-lg-6.col-lg-6.mb-4.mb-md-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ciencias formales 
                p.text-small.px-4.text-center.pb-2 En disciplinas como la lógica formal y las ciencias exactas (como la física o la informática), el razonamiento deductivo se usa para asegurar que las conclusiones sean precisas y correctas. En estas áreas, se parte de principios generales bien establecidos y se aplican para explicar fenómenos específicos o resolver problemas concretos. Por ejemplo, en informática, un algoritmo puede diseñarse siguiendo reglas lógicas que, aplicadas correctamente, garantizan un resultado exacto.

    .row.mb-5.justify-content-center
      p.mb-4 Ejemplo en matemáticas
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-42.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 1
            p.text-small.mb-0.d-flex(v-html="'Si x > 5, entonces x² > 25.'")
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-down")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-43.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 2
            p.text-small.mb-0.d-flex x = 6.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="flip-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-44.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Conclusión
            p.text-small.mb-0.d-flex  x² = 36, que es mayor que 25.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Razonamiento inductivo

    p.mb-4 El razonamiento inductivo es un tipo de razonamiento que sigue el camino opuesto al deductivo: va de lo particular a lo general. Esto implica que partimos de la observación de casos o ejemplos específicos y, a partir de ellos, llegamos a una conclusión general. 

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in-left")
        img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center.flex-column
        div.d-flex.align-items-start.bg-azul.px-3.py-4.mb-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-46.svg', alt='Texto que describa la imagen')
          p.pe-xl-3(data-aos="fade-up") Sin embargo, a diferencia del razonamiento deductivo, el inductivo no puede asegurar con certeza absoluta que la conclusión sea siempre verdadera. Por ejemplo, si observamos que "el sol ha salido por el este todos los días que recordamos", podemos concluir que "el sol siempre sale por el este". No obstante, siempre existe la posibilidad de que en el futuro ocurra algo que contradiga esta generalización.

    .row.mb-4
      h2 Estructura
      p El razonamiento inductivo comienza con la observación de varios datos o casos específicos y, con base en ellos, llega a una conclusión más amplia. Un ejemplo sencillo sería:
      
    .row.mb-5.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="flip-up")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-47.svg', style="width: 80px")
          p.px-1.text-small.mb-0 <strong>Observación 1</strong>. Hoy, el sol salió por el este.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="flip-down")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-47.svg', style="width: 80px")
          p.px-1.text-small.mb-0 <strong>Observación 2</strong>. Ayer, el sol también salió por el este.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0(data-aos="flip-up")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-47.svg', style="width: 80px")
          p.px-1.text-small.mb-0 <strong>Observación 3</strong>. El sol ha salido por el este todos los días que recordamos.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0.mt-xxl-0.mt-xl-4(data-aos="flip-down")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-47.svg', style="width: 80px")
          p.px-1.text-small.mb-0 <strong>Conclusión</strong>. Podemos decir que el sol siempre sale por el este.

    .row.mb-4
      p.mb-4 Aunque esta conclusión es probable, no podemos estar completamente seguros, ya que podría haber una excepción en el futuro.
      p.text-bold Las características clave son:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Probabilidad")
            p Las conclusiones del razonamiento inductivo son probables, pero no seguras. Aunque es posible que sean correctas, no se garantiza al 100 %.
          .div(titulo="Generalización")
            p Se basa en crear una regla general a partir de la observación de casos específicos. Si un fenómeno se repite varias veces, inferimos que siempre sucederá de la misma manera.
          .div(titulo="Flexibilidad")
            p El razonamiento inductivo permite ajustar las conclusiones al obtener más datos. Si una nueva observación contradice una conclusión previa, esta puede modificarse.
          .div(titulo="De lo específico a lo general")
            p El razonamiento inductivo parte de casos concretos y busca identificar patrones o reglas generales, como al observar piezas de un rompecabezas para deducir la imagen completa.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
      
      p.mt-4 Las aplicaciones del razonamiento inductivo son:

    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Ciencias empíricas
              p Disciplinas como física, biología o sociología construyen su conocimiento mediante la observación de fenómenos y la formulación de teorías generales. Ejemplo: los biólogos observan especies y desarrollan teorías sobre la evolución.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="flip-up")
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Investigación científica
              p Muchos experimentos científicos emplean el razonamiento inductivo; los científicos recopilan datos y formulan hipótesis o teorías para explicar sus observaciones.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Aprendizaje automático
              p Los algoritmos de machine learning analizan grandes volúmenes de datos para identificar patrones y hacer predicciones. Ejemplo: un sistema de reconocimiento de voz aprende palabras al analizar miles de ejemplos de personas hablando.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')  

    p Ejemplo en ciencia:
    .row.mb-3.mx-0
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-rosa.p-4.p-xxl-5
        p.mb-4 Imaginemos que observamos lo siguiente:
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  <strong>Observación</strong>. Cada vez que dejamos caer un objeto, cae al suelo.
        div.d-flex.mb-0
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0  <strong>Conclusión</strong>. La gravedad actúa sobre todos los objetos, atrayéndolos hacia la Tierra.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      p.my-4 Esta es una generalización basada en la observación repetida de un fenómeno, y aunque parece muy segura, el razonamiento inductivo no puede garantizar que no haya excepciones futuras.
      p Comparación entre razonamiento inductivo y deductivo: 

    .row.mb-0
      p <strong>Tabla 1</strong> Comparación de razonamientos 
      .tabla-a.mb-5
        table
          caption Nota. Tomado  de Aguilar, J. (2024)
          thead
            tr
              th Aspecto
              th Aspecto
              th Derecho Objetivo
          tbody
            tr
              td Característica
              td De lo general a lo particular
              td De lo particular a lo general
            tr
              td Dirección del razonamiento
              td La conclusión es verdadera si las premisas lo son
              td La conclusión es probable, pero no segura
            tr
              td Dependencia de las premisas
              td Depende estrictamente de la validez y verdad de las premisas
              td Depende de la cantidad y calidad de observaciones
            tr
              td Ejemplo clásico
              td Silogismo: "Todos los hombres son mortales"
              td Observación empírica: "El sol siempre sale por el este"
            tr
              td Ámbito de aplicación
              td Matemáticas, lógica formal, ciencias exactas
              td Ciencias experimentales, investigación científica
            tr
              td Flexibilidad
              td Poco flexible, si una premisa es incorrecta, la conclusión también lo será
              td Más flexible, se ajusta con nuevos datos

    .row.pb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.pb-md-3

        .row
          p.mb-5.px-5.px-md-0 Si alguna de las premisas es incorrecta o incierta, la conclusión resultante también será incorrecta.
          .col-10.col-lg-6.col-lg-6.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Dependencia de las premisas
                p.text-small.px-4.text-center.pb-2 Si alguna de las premisas es incorrecta o incierta, la conclusión resultante también será incorrecta. 
                
          .col-10.col-lg-6.col-lg-6.mb-4.mb-md-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Limitación a lo que ya se sabe
                p.text-small.px-4.text-center.pb-2 El razonamiento deductivo no genera nuevo conocimiento; solo permite derivar conclusiones a partir de información ya conocida.
    .row.mb-5
      p.mb-4 Limitaciones del razonamiento inductivo:        
      TabsC
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Generalizaciones incorrectas", :iconUrl="require('@/assets/curso/unidad/img-64.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Generalizaciones incorrectas
              p(data-aos="fade-up") A veces, se obtienen conclusiones generales a partir de un número insuficiente de observaciones, lo que puede llevar a errores.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Falsabilidad", :iconUrl="require('@/assets/curso/unidad/img-64.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Falsabilidad
              p No garantiza la veracidad absoluta de las conclusiones; siempre existe la posibilidad de que aparezca una excepción que invalide una generalización.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Relación entre ambos tipos de razonamiento

    .row.mb-4
      p.mb-4 A pesar de sus diferencias, el razonamiento inductivo y el deductivo suelen complementarse en la práctica. En muchos casos, el razonamiento inductivo genera hipótesis generales que luego pueden verificarse de forma más rigurosa mediante el razonamiento deductivo.
      p.text-bold.mb-4 Ejemplo en el método científico son:
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Inducción")
            p Los científicos observan fenómenos específicos, como el comportamiento orbital de los planetas, y a partir de estas observaciones, formulan hipótesis generales, como la ley de la gravitación universal de Newton.
          .div(titulo="Deducción")
            p Una vez que la hipótesis está formulada, los científicos utilizan el razonamiento deductivo para derivar predicciones específicas que deben cumplirse si la hipótesis es correcta (por ejemplo, la predicción del movimiento de un cometa o el comportamiento de los satélites).
          .div(titulo="Comprobación")
            p Las predicciones derivadas deductivamente se ponen a prueba mediante experimentación o nuevas observaciones. Si las predicciones se cumplen, la hipótesis original se refuerza. Si no, puede ser modificada o descartada
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="flip-up")
        img.-mt-18px(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

    .row.mb-4
      p Este ciclo de inducción y deducción es esencial en el método científico, ya que permite a los científicos desarrollar nuevas teorías y comprobar su validez a lo largo del tiempo.
    
    .row.mb-4.pb-2.mx-0
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-amarillo-claro.p-4.p-xxl-5(data-aos="fade-right")
        p.mb-4 Ejemplo de razonamiento deductivo:
        div.d-flex
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Premisa 1</strong>. Todos los mamíferos tienen sangre caliente.  
        div.d-flex.mb-0
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Premisa 2</strong>. Los delfines son mamíferos.
        div.d-flex.mb-0
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Conclusión</strong>. Por lo tanto, los delfines tienen sangre caliente.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')

    p.mb-4 Este ejemplo ilustra cómo, partiendo de dos afirmaciones generales, se deriva una conclusión específica. Dado que ambas premisas son verdaderas, la conclusión también lo será.
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-azul-claro.p-4.p-xxl-5(data-aos="fade-left")
        p.mb-4 Ejemplo de razonamiento inductivo:
        div.d-flex
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Premisa 1</strong> He visto a tres cisnes, y todos son blancos.
        div.d-flex.mb-0
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Premisa 2</strong> Los cisnes que vi el año pasado también eran blancos.
        div.d-flex.mb-0
          img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 <strong>Conclusión</strong> Probablemente, todos los cisnes son blancos.
    p.mb-5 En este caso, a partir de varias observaciones individuales, se extrae una conclusión general. No obstante, esta conclusión no es completamente segura, ya que podría existir un cisne que no sea blanco, lo cual invalidaría la generalización.

    #t_2_4.titulo-segundo
      div.d-flex
        span.me-3 2.4  
        h2 Importancia del pensamiento lógico en la vida cotidiana

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-rosa.px-3.py-4.mb-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-60.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.mb-0(data-aos="fade-up") El razonamiento lógico es esencial en la vida cotidiana, ya que facilita la toma de decisiones informadas, la resolución de problemas y el aprendizaje eficaz. A través del razonamiento inductivo, por ejemplo, es posible aprender de experiencias pasadas y formular reglas generales sobre el mundo. A su vez, el razonamiento deductivo permite aplicar principios generales a situaciones específicas, posibilitando actuar de forma coherente y lógica.
        p Algunas áreas donde el pensamiento lógico es crucial incluyen: 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')  

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Resolución de problemas", :iconUrl="require('@/assets/curso/unidad/img-62.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Resolución de problemas
            p(data-aos="fade-up") Permite analizar una situación, identificar causas posibles y deducir soluciones adecuadas para abordarla eficazmente.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Toma de decisiones", :iconUrl="require('@/assets/curso/unidad/img-63.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Toma de decisiones
            p En decisiones relevantes, el razonamiento inductivo (experiencias previas) y deductivo (principios generales) resultan útiles para evaluar las opciones.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Aprendizaje", :iconUrl="require('@/assets/curso/unidad/img-64.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Aprendizaje
            p Facilita el aprendizaje al derivar conclusiones de ejemplos específicos (inducción) y aplicar ese conocimiento a situaciones nuevas (deducción).
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación efectiva", :iconUrl="require('@/assets/curso/unidad/img-65.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Comunicación efectiva
            p El razonamiento lógico mejora la solidez de los argumentos en debates, discusiones y presentaciones profesionales, fortaleciendo la claridad y coherencia en la transmisión de ideas.

    #t_2_5.titulo-segundo
      div.d-flex
        span.me-3 2.5
        h2 Pensamiento crítico y lógica

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-azul-claro.p-4.p-xxl-5
        p.mb-4(data-aos="fade-up") El pensamiento crítico se apoya en gran medida en el uso adecuado del razonamiento inductivo y deductivo. Un pensador crítico evalúa la validez de los argumentos, evidencias y conclusiones, cuestionando las premisas y buscando posibles inconsistencias en el razonamiento.

    
    p.mb-4 Algunos ejemplos de pensamiento crítico son:

    .row.mb-5.justify-content-center
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="flip-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-36.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 1
            p.text-small.mb-0.d-flex Todos los medios de comunicación son poco confiables.
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="flip-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-37.svg', style="width: 80px")
          div.d-flex.flex-column.justify-content-center
            p.text-bold.mb-0 Premisa 2
            p.text-small.mb-0.d-flex No debemos confiar en ninguna noticia que venga de los medios.

    .row.mb-5
      p Un pensador crítico podría desafiar esta premisa generalizada, cuestionando si realmente todos los medios son poco confiables o si se trata de una generalización excesiva basada en experiencias limitadas. En este caso, cuestionar el razonamiento inductivo puede prevenir la formación de conclusiones erróneas.

      h1.mb-5 Limitaciones y sesgos en el pensamiento lógico
      p.mb-4 A pesar de su utilidad, el pensamiento lógico presenta limitaciones, y las personas pueden ser vulnerables a sesgos que distorsionan el razonamiento. Estos sesgos pueden afectar tanto al razonamiento inductivo como al deductivo. Los sesgos comunes son:

      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Generalización apresurada (sesgo inductivo)")
            p Consiste en llegar a una conclusión general demasiado rápido basándose en un número limitado de observaciones.
          .div(titulo="Sesgo de confirmación")
            p Ocurre al prestar atención únicamente a la información que confirma creencias preexistentes, ignorando aquella que las contradice.
          .div(titulo="Falacia de la afirmación del consecuente (sesgo deductivo)")
            p Es el error de asumir que, si una proposición implica otra, la proposición inversa también debe ser cierta, lo cual no siempre es correcto.
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad/img-73.png', alt='Texto que describa la imagen')

    p.mb-4 El razonamiento inductivo y deductivo son pilares esenciales del pensamiento lógico. Mientras que el razonamiento deductivo permite llegar a conclusiones certeras a partir de principios generales, el razonamiento inductivo nos ayuda a formular hipótesis y teorías generales basadas en la observación de casos particulares
    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-amarillo-claro.p-4.p-xxl-5(data-aos="fade-up")
        p.mb-4 El pensamiento lógico, combinado con un enfoque crítico, es una herramienta poderosa para el análisis y la toma de decisiones en diversos contextos, desde lo cotidiano hasta lo científico, mejorando nuestra capacidad para interactuar y comprender el entorno de manera coherente y fundamentada.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-74.png', alt='Texto que describa la imagen')
    
    #t_2_6.titulo-segundo
      div.d-flex
        span.me-3 2.6  
        h2 Proposiciones, conectores lógicos y tablas de verdad
    
    p.mb-5 Las proposiciones son afirmaciones que pueden ser verdaderas o falsas. A diferencia de una pregunta o una orden, que no pueden clasificarse como verdaderas o falsas, una proposición es clara y posee un valor de verdad específico. Por ejemplo, al decir "El cielo es azul", esta afirmación puede ser verdadera en un día despejado o falsa en un día nublado.

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/bg-icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Proposiciones, conectores lógicos y tablas de verdad
              p.text-small ¿Cómo influye la correcta selección de conectores lógicos en la claridad y coherencia de un argumento? ¿De qué forma pueden las tablas de verdad ayudar a comprender las implicaciones de las relaciones entre diferentes proposiciones? Lo invitamos a leer el PDF Proposiciones, conectores lógicos y tablas de verdad, para profundizar sobre estos elementos.
            .col-sm-auto(data-aos="zoom-in-up")
              a.download-btn.boton.color-terciario.color-ppal(:href="obtenerLink('/downloads/Anexo_Proposiciones_conectores_logicos_y_tablas_de_verdad.pdf')" target="_blank")
                span.color-ppal.text-small Descargar
                i.fas.fa-arrow-right.color-ppal
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
