<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 2: Razonamiento y demostraciones lógicas'" :subTitulo="'2. Técnicas de demostración: directa, indirecta, por contraposición y reducción al absurdo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-0 Las técnicas de demostración son métodos que se utilizan en matemáticas y lógica para probar la veracidad de una proposición o enunciado. Una demostración es una secuencia de argumentos lógicos que parten de definiciones, axiomas o proposiciones previamente aceptadas, con el objetivo de llegar a una conclusión que demuestre la afirmación. 
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Demostración directa
    p.mb-4 La demostración directa es una técnica que permite demostrar la validez de una proposición partiendo directamente de las hipótesis o premisas y aplicando una serie de pasos lógicos que llevan, de manera consecutiva, a la conclusión deseada. En esta técnica, el matemático no necesita suponer lo contrario o utilizar elementos indirectos; en su lugar, emplea propiedades conocidas y el razonamiento lógico.

    .row.mb-5
      .col-12.bg-amarillo-claro.p-4(data-aos="fade-up")
        h3.mb-2 Ejemplo 1
        p.text-bold.mb-1 Proposición. 
        p.mb-0 La suma de dos números pares es siempre un número par.
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.text-bold.mb-1 Demostración.
            p.mb-4 El matemático comienza suponiendo que tiene dos números pares, <strong>a y b</strong>. Por la definición de número par, esto significa que ambos números pueden escribirse como múltiplos de 2, es decir, <strong>a=2k y b=2m</strong>, donde k y m son números enteros. Aquí, la clave es recordar que cualquier número par es el doble de algún entero.
            p.mb-4 Seguidamente, el matemático procede a sumar los dos números:
            .bg-white.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 a + b = 2k + 2m
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.mb-4 Factorizando el término común 2, obtiene:
            .bg-white.py-2.px-4.px-lg-5.mb-0.d-inline-block.mb-4(data-aos="fade-up")
              p.text-bold.text-center.mb-0 a +  b = 2 (k + m)
            p.mb-0 Dado que <strong>k+m</strong> es un número entero (pues la suma de dos enteros siempre es otro entero), esto significa que la expresión final <strong>2(k+m)</strong> es de la forma <strong>2n</strong>, donde <strong>n=k+m</strong> es un entero. Por tanto, <strong>a+b</strong> es divisible por 2, lo que implica que <strong>a+b</strong> es un número par.
            .row.mb-5
      .d-flex.align-items-center.px-0
        div.d-flex.align-items-center.bg-azul.px-3.py-4.w-100(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.mb-1.text-bold Conclusión
            p.pe-xl-5.mb-0 El matemático concluye que la suma de dos números pares siempre resulta en un número par, lo que valida la proposición.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Demostración indirecta
    p.mb-4 La demostración indirecta, también conocida como prueba por contradicción, es una técnica donde el matemático no prueba directamente la afirmación que quiere demostrar. En su lugar, comienza suponiendo que la proposición es falsa, y luego muestra que esta suposición lleva a una contradicción, ya sea con otra afirmación conocida como verdadera, con los axiomas del sistema o con la lógica misma. Al llegar a una contradicción, el matemático concluye que la proposición inicial debe ser verdadera.

    .row.mb-5
      .col-12.bg-amarillo-claro.p-4(data-aos="fade-up")
        h3.mb-2 Ejemplo 2
        p.text-bold.mb-1 Proposición. 
        p.mb-0 La raíz cuadrada de 2 es un número irracional.
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.text-bold.mb-1 Demostración.
            p.mb-4 El matemático inicia suponiendo lo contrario de lo que se quiere demostrar, es decir, que √2 es un número racional. Si √2 es racional, entonces, por definición, se puede escribir como una fracción de dos números enteros p y q, donde p/q está en su forma más simplificada (es decir, que p y q no tienen factores comunes): 
            .bg-white.mb-4.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 √2  =  p/q
            p.mb-4 A continuación, el matemático eleva ambos lados de la ecuación al cuadrado para deshacerse de la raíz:
            .bg-white.mb-0.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 √(2 )  =  p^2/q^2 
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.mb-4 Multiplicando ambos lados por q^2 se obtiene:
            .bg-white.mb-4.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 2q^2  = p^2
            p.mb-4 Esto significa que p^2 es un número par (pues es igual al doble de q^2). Como p^2 es par, el matemático deduce que ppp también debe ser un número par, porque solo los cuadrados de los números pares son pares. Entonces, puede escribir p como p=2k, donde k es un número entero.
            p.mb-4 Sustituyendo p=2k en la ecuación 2q^2  = p^2, se obtiene:
            .bg-white.mb-0.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 2q^2  = (2k)^2  = 4k^2
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .col-12.col-lg-8(data-aos="fade-right")
            p.mb-4 Dividiendo ambos lados por 2:
            .bg-white.mb-4.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 q^2  = 2k^2
            p.mb-0 Esto implica que q^2 también es un número par, lo que a su vez significa que q es par. Pero aquí es donde surge la contradicción: si tanto p como q son pares, entonces ambos tienen 2 como factor común, lo cual contradice la suposición inicial de que la fracción p/q estaba en su forma más simplificada.
          .d-none.d-lg-block.col-12.col-lg-3(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .d-flex.align-items-center.px-0
        div.d-flex.align-items-center.bg-azul.px-3.py-4.w-100(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.mb-1.text-bold Conclusión
            p.pe-xl-5.mb-0 Dado que la suposición de que √2 es racional lleva a una contradicción, el matemático concluye que √2 debe ser irracional.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Demostración por contraposición
    p.mb-4 La demostración por contraposición se basa en el principio de que una proposición del tipo "Si A, entonces B" es lógicamente equivalente a su contraposición: "Si no B, entonces no A". En lugar de probar directamente la proposición original, el matemático prueba la contraposición, que a veces puede ser más fácil de demostrar.


    .row.mb-5
      .col-12.bg-amarillo-claro.p-4(data-aos="fade-up")
        h3.mb-2 Ejemplo 3
        p.text-bold.mb-1 Proposición. 
        p.mb-0 Si n^2 es impar, entonces n es impar.
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.text-bold.mb-1 Demostración.
            p.mb-4 El matemático utiliza la contraposición de la proposición original: "Si n es par, entonces n^2 es par". A través de este enfoque, en lugar de probar que n es impar cuando n^2 es impar, demuestra que si n es par, su cuadrado también es par, lo cual es la contraposición de la afirmación original.
            p.mb-4 Supone que n es un número par. Por definición, si n es par, se puede escribir como n=2k, donde k es un número entero. A continuación, el matemático eleva n al cuadrado:
            .bg-white.mb-4.py-2.px-4.px-lg-5.mb-0.d-inline-block(data-aos="fade-up")
              p.text-bold.text-center.mb-0 n^2  =  (2k)^2  = 4k^2
            p.mb-4 Esto se puede reescribir como n^2  = 2(2k^2), lo que muestra que n^2 es divisible por 2, y por lo tanto es un número par.
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

      .d-flex.align-items-center.px-0
        div.d-flex.align-items-center.bg-azul.px-3.py-4.w-100(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.mb-1.text-bold Conclusión
            p.pe-xl-5.mb-0 Al demostrar la contraposición ("Si n es par, entonces n^2 es par"), el matemático concluye que la proposición original es verdadera: Si n^2 es impar, entonces n debe ser impar.

    #t_2_4.titulo-segundo
      div.d-flex
        span.me-3 2.4  
        h2 Reducción al absurdo
    p.mb-4 La reducción al absurdo es una técnica en la que el matemático comienza asumiendo lo contrario de lo que se quiere probar, pero el objetivo es llevar esa suposición a una contradicción con una verdad conocida o un principio aceptado. Esta técnica es similar a la demostración por contradicción, pero el absurdo puede no estar directamente relacionado con las hipótesis iniciales, sino con una conclusión que viola una verdad fundamental.

    .row.mb-5
      .col-12.bg-amarillo-claro.p-4(data-aos="fade-up")
        h3.mb-2 Ejemplo 4
        p.text-bold.mb-1 Proposición. 
        p.mb-0 No existe un número mayor.
      .col-12.bg-azul-claro.p-4(data-aos="fade-up")
        .row
          .col-12.col-lg-8.col-xl-7(data-aos="fade-right")
            p.text-bold.mb-1 Demostración.
            p.mb-4 El matemático comienza suponiendo lo contrario de lo que se quiere demostrar, es decir, que existe un número mayor, llamémoslo N, que es el número más grande posible. Bajo esta suposición, ningún número puede ser mayor que N.
            p.mb-4 A continuación, el matemático considera el número N+1. Claramente, N+1 es mayor que N, lo que contradice la suposición inicial de que N era el número más grande. Esta contradicción con una verdad fundamental (que siempre se puede sumar 1 a un número para obtener un número mayor) revela que la suposición original es falsa.
          .d-none.d-lg-block.col-12.col-lg-4.col-xl-5(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .d-flex.align-items-center.px-0
        div.d-flex.align-items-center.bg-azul.px-3.py-4.w-100(data-aos="fade-up")
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.mb-1.text-bold Conclusión
            p.pe-xl-5.mb-0 No existe un número mayor, ya que cualquier número puede ser superado sumándole 1.

    .row.bg-rosa.bg-full-width.py-4.mb-5
      .px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.p-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2 Cuantificadores lógicos: existenciales y universales
          p.mb-5 Los cuantificadores lógicos, existencial (∃) y universal (∀), son fundamentales en la lógica matemática para expresar generalizaciones y particularidades en proposiciones. Este documento explora su uso en la estructuración del razonamiento lógico, mostrando ejemplos y ejercicios que ilustran cómo el cuantificador universal permite afirmar una propiedad para todos los elementos de un conjunto, mientras que el existencial señala la existencia de al menos un elemento que cumple cierta condición.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Proposiciones, conectores lógicos y tablas de verdad.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Cuantificadores lógicos: existenciales y universales.
             
    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/38841") Manzur, A. (2009). Experimentos de demostración. Plaza y Valdes.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/HKtyywesINM") Cal Math. Demostraciones Directas y Ejemplos - Cómo Demostrar Matemáticas 3 [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas de Demostración Matemática',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza a una demostración indirecta?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se asume la conclusión y se intenta probar las premisas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se asume que la conclusión es falsa y se deriva una contradicción',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se observa un patrón y se generaliza',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes técnicas de demostración utiliza la suposición opuesta a lo que se quiere demostrar?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Directa', esCorrecta: false },
            { id: 'b', texto: 'Por contraposición', esCorrecta: false },
            { id: 'c', texto: 'Reducción al absurdo', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es una demostración por contraposición?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una prueba que asume lo contrario de la premisa inicial',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una prueba que demuestra la implicación inversa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una prueba que parte de ejemplos específicos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿En qué tipo de demostración se deriva una contradicción al asumir que la conclusión es falsa?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Directa', esCorrecta: false },
            { id: 'b', texto: 'Por contraposición', esCorrecta: false },
            { id: 'c', texto: 'Indirecta', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de demostración se utiliza para probar que "si A implica B" es verdadero?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducción al absurdo', esCorrecta: false },
            { id: 'b', texto: 'Contraposición', esCorrecta: false },
            { id: 'c', texto: 'Directa', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
