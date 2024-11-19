<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 2: Razonamiento y demostraciones lógicas'" :subTitulo="'1. Signos y razonamiento'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-4.pb-2
      .col-8.d-none.d-lg-block
        p.mb-0 El razonamiento es la herramienta esencial que permite a las personas interpretar el entorno, construir teorías y encontrar soluciones. A través de tres tipos principales inductivo, deductivo y abductivo;  se estructura un ciclo de exploración y verificación que resulta clave para el conocimiento científico. En este video, se abordará cómo se interrelacionan estos tipos de razonamiento y el papel fundamental de la semiótica, el estudio de los signos y significados, en este proceso. Están invitados  a descubrir el funcionamiento de estos métodos de pensamiento y su importancia en la búsqueda de respuestas y certezas. 
      .col-12.col-lg-4
        img.img-a.img-t(src='@/assets/curso/unidad/img-5.png', alt='')

    .bg-fondo-3.bg-full-width.mb-5
      div.px-5.pb-md-3.py-4
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h2 Tipos de signos
    p.mb-4 Peirce identificó tres tipos de signos:

    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-6.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-small.text-bold.mb-0 Íconos
            p.text-small.mb-0 Representan su objeto a través de una similitud; por ejemplo, un retrato.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-7.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-small.text-bold.mb-0 Índices
            p.text-small.mb-0 Señalan su objeto mediante una conexión causal o contigüidad; por ejemplo, el humo que indica fuego.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-small.text-bold.mb-0 Símbolos
            p.text-small.mb-0 Poseen un significado arbitrario que depende de convenciones; como las palabras.

    .bg-amarillo-claro.p-4.mb-0
      p.mb-3 La semiótica proporciona una herramienta poderosa para analizar cómo se construyen y se comunican los argumentos. Al considerar el razonamiento como un proceso semiótico, se puede entender mejor cómo las personas interpretan signos, generan significado y toman decisiones.

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="87%" y="31.5%" numero="+")
        .h5.mb-2 Interpretación
        p La forma en que los individuos interpretan los signos influye en su capacidad para razonar. Contextos culturales o personales distintos pueden llevar a diferentes comprensiones y conclusiones.
      .tarjeta.bg-white.p-4(x="87%" y="49.5%" numero="+")
        .h5.mb-2 Comunicación
        p En entornos colaborativos, la semiótica subraya la importancia de la claridad en la comunicación. Para que el razonamiento sea claro, los signos deben ser comprendidos de manera similar por todos los participantes.
      .tarjeta.bg-white.p-4(x="87%" y="67.5%" numero="+")
        .h5.mb-2 Creatividad
        p En el razonamiento abductivo, la generación de nuevas ideas depende de la habilidad para asociar signos de formas novedosas, mostrando que la semiótica impulsa la innovación.


    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Razonamiento abductivo

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p El razonamiento abductivo se centra en identificar la mejor explicación posible para un conjunto de observaciones, siendo especialmente útil en áreas donde la información puede ser incompleta o ambigua, como la ciencia, la medicina y la investigación social. Este tipo de inferencia permite formular hipótesis que luego pueden ser probadas para validar su precisión.
        div.d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-10.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Charles Sanders Peirce introdujo el término "abducción" en el siglo XIX, describiéndolo como el proceso de formar una hipótesis que explica los hechos observados. Según Peirce, la abducción es el primer paso en el proceso científico, ya que permite la generación de ideas y teorías innovadoras.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')  

    p.mb-4 A continuación, se presenta un resumen de aspectos clave del razonamiento abductivo, comparándolo con la inducción y la deducción, y explorando sus aplicaciones, críticas y perspectivas contemporáneas en la filosofía de la ciencia.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")  
        AcordionA(tipo="b")
          .div(titulo="Diferencias entre abducción, inducción y deducción")
            p A diferencia de la inducción, que generaliza a partir de casos específicos, y la deducción, que aplica principios generales a casos concretos, la abducción busca la mejor explicación para un fenómeno observado. Por ejemplo, si se observan calles mojadas, se podría inferir que ha llovido, aunque existan otras posibles causas.
          .div(titulo="Aplicaciones del razonamiento abductivo en ciencia y medicina")
            p En ciencia, el razonamiento abductivo permite a los investigadores formular hipótesis frente a datos incompletos, como en el estudio del impacto de especies invasoras en ecosistemas. En medicina, se utiliza para el diagnóstico, donde los médicos generan hipótesis basadas en síntomas observados, que luego se confirman con pruebas.
          .div(titulo="Críticas y limitaciones del razonamiento abductivo")
            p Aunque útil, el razonamiento abductivo puede ser vulnerable a errores si no se aplica con rigor. Gilbert Ryle advierte que los prejuicios pueden influir en la formulación de hipótesis, distorsionando la interpretación de los datos y conduciendo a conclusiones equivocadas.
          .div(titulo="Perspectiva contemporánea en la filosofía de la ciencia")
            p Autores como Nancy Cartwright sostienen que el razonamiento abductivo es un proceso dinámico, en el que la formulación de hipótesis se adapta conforme se obtiene nueva información. Así, la abducción se convierte en una herramienta de revisión y mejora continua en la investigación científica.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2
        h2 Razonamiento inductivo 
    
    .row.mb-4 
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-0 El razonamiento inductivo es un proceso de inferencia en el que se llega a una conclusión general basada en la observación de casos específicos. A diferencia del razonamiento deductivo, que parte de principios generales para derivar conclusiones particulares, el razonamiento inductivo va de lo particular a lo general. Aunque no garantiza la certeza absoluta, es una herramienta clave para descubrir patrones, formular conjeturas y desarrollar nuevas teorías. En matemáticas, este tipo de razonamiento es especialmente útil en áreas como la teoría de números, la geometría y la combinatoria, donde los patrones y regularidades juegan un papel central.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
    
    .row.mb-4 
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-amarillo-claro.mb-0.p-4(data-aos="fade-up")
          h3 Ejemplo 1. Patrón numérico
          p.mb-0 Consideremos la secuencia de los primeros números naturales: <strong>1, 3, 5, 7, 9, ...</strong>
        .bg-rosa.p-4(data-aos="fade-up")
          p.mb-0 Al observar esta sucesión, notamos que cada número es impar y que la diferencia entre ellos es 2. Basándonos en estos casos particulares, podemos inducir que el siguiente número en la secuencia será 11. Este tipo de conclusión, obtenida a partir de la observación de un patrón, es una inferencia inductiva. Aunque no hemos comprobado la totalidad de los números, el patrón observado sugiere una regla general: la secuencia está formada por números impares consecutivos.
    
    .row.mb-4 
      .col-12.col-xl-7
        .bg-amarillo-claro.mb-0.p-4(data-aos="fade-up")
          h3 Ejemplo 2. Suma de los primeros números naturales
          p.mb-4 Imaginemos que sumamos los primeros números naturales:
          p.mb-3 1 + 2 = 3 
          p.mb-3 1 + 2 + 3 = 6 
          p.mb-0 1 + 2 + 3 + 4 = 10
        .bg-rosa.p-4(data-aos="fade-up")
          p.mb-3 A partir de estas observaciones, podemos inducir una conjetura: la suma de los primeros n números naturales sigue un patrón. En este caso, el razonamiento inductivo nos lleva a suponer que la fórmula general para la suma de los primeros n números naturales es:
          .row.mb-4
            .col-12.col-lg-6.col-xl-5.bg-white.px-4.py-2.mx-auto
              p.text-bold.mb-0.text-center S(n)=((n(n+1))/2)
          p.mb-0 Aunque no hemos probado esta fórmula para todos los números naturales, el razonamiento inductivo sugiere que esta regla podría ser válida. Podríamos verificarla mediante una demostración formal, utilizando razonamiento deductivo.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 El razonamiento inductivo es valioso porque permite a los matemáticos descubrir patrones y formular conjeturas sin necesidad de conocer de antemano la solución exacta. Este proceso es esencial en la investigación y el desarrollo de nuevas teorías matemáticas. Por ejemplo, muchos teoremas en geometría y álgebra comenzaron como simples conjeturas basadas en patrones observados a partir de ejemplos particulares.
        p.mb-0 Sin embargo, es importante destacar que el razonamiento inductivo no ofrece certeza absoluta. Un patrón observado en un conjunto limitado de casos puede no aplicarse en general. Por ello, aunque el razonamiento inductivo es fundamental para la generación de hipótesis, la validación de estas hipótesis a menudo requiere pruebas deductivas rigurosas.

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Razonamiento deductivo

    .row.mb-4 
      .col-12.col-xl-7.col-xxl-8(data-aos="fade-right")
        p.mb-4 El razonamiento deductivo es un proceso de inferencia en el cual, a partir de principios o premisas generales, se deriva una conclusión específica que será necesariamente verdadera si las premisas son correctas. En matemáticas, este tipo de razonamiento es fundamental, ya que permite demostrar teoremas y resultados con certeza absoluta. A diferencia del razonamiento inductivo, que infiere generalidades a partir de ejemplos específicos, el razonamiento deductivo se basa en leyes o axiomas generales para llegar a conclusiones particulares que son irrefutables bajo las condiciones establecidas.
      .col-12.col-xl-5.col-xxl-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .row.mb-4 
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-amarillo-claro.mb-0.p-4(data-aos="fade-up")
          h3 Ejemplo 1. Patrón numérico
          p.mb-4 Un ejemplo clásico de razonamiento deductivo en matemáticas es la demostración del teorema de Pitágoras. Este teorema establece que, en un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa es igual a la suma de los cuadrados de las longitudes de los catetos. La expresión general del teorema es:
          p.mb-0.text-bold a^2 + b^2 = c^2
        .bg-rosa.p-4(data-aos="fade-up")
          p.mb-0 Donde <strong>a</strong> y <strong>b</strong> son los catetos, y <strong>c</strong> es la hipotenusa. Este resultado puede demostrarse deductivamente a partir de axiomas geométricos y de la definición de triángulo rectángulo. No importa cuántos ejemplos de triángulos rectángulos observemos; el razonamiento deductivo garantiza que el teorema es válido para todos los triángulos rectángulos.

    .row.mb-4
      .col-12.col-lg-10.mx-auto
        .bg-amarillo-claro.mb-0.p-4(data-aos="fade-up")
          h3 Ejemplo 2. Propiedades de los números pares
          p.mb-4 Consideremos ahora una propiedad de los números pares. Sabemos que un número es par si puede expresarse en la forma 2n, donde n es un número entero. Si sumamos dos números pares, podemos demostrar deductivamente que el resultado será siempre par:

          .row
            .col-12.col-lg-10.mx-auto
              .row
                .col-12.col-lg-6(data-aos="fade-right")
                  .d-flex.flex-column
                    .bg-amarillo.py-3
                      p.mb-0.text-bold.text-center Premisa 1
                    .bg-white.p-4
                      p  Un número par puede escribirse como <strong>2n</strong>, donde <strong>n</strong> es un número entero.
                .col-12.col-lg-6(data-aos="fade-left")
                  .d-flex.flex-column
                    .bg-amarillo.py-3
                      p.mb-0.text-bold.text-center Premisa 2
                    .bg-white.p-4
                      p  Otro número par puede escribirse como <strong>2m</strong>, donde <strong>m</strong> es un número entero.
          
        .bg-rosa.mb-0.p-4(data-aos="fade-up")
          p.mb-4 La suma de dos números pares es:
          .bg-white.py-2.px-4.px-lg-5.mb-4.d-inline-block(data-aos="fade-down")
            p.text-bold.text-center.mb-0 2n=2m=2(n+m)
          p.mb-0 Dado que n+m  es un número entero, concluimos deductivamente que la suma tiene la forma 2k, donde k=n+m es un entero. Por lo tanto, la suma de dos números pares es par. Este resultado es aplicable en todos los casos posibles, ya que ha sido demostrado a partir de propiedades generales de los números enteros, sin depender de ejemplos específicos.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
