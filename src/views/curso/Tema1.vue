<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 1. Introducción a la Lógica y el Pensamiento Lógico'" :subTitulo="'1. Definición de lógica matemática'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-4
      p Antes de definir la <strong>lógica</strong> matemática, es fundamental revisar los términos que la componen. En general, la palabra "lógica" se concibe como una disciplina de la filosofía dedicada al estudio de las inferencias. Al profundizar en su definición, la inferencia se comprende como el <strong>proceso mediante el cual una conclusión se sigue de una premisa, existiendo argumentos que pueden ser válidos o no, junto con métodos para identificarlos</strong>.

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center.flex-column
        div.d-flex.align-items-start.bg-rosa.px-3.py-4.mb-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-5.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px(data-aos="fade-up") Etimológicamente, el término "lógica" proviene del griego logiké, que significa "dotada de razón." No obstante, en el uso cotidiano, esta palabra se asocia con el "sentido común," refiriéndose a una forma coherente de pensar.
        p Tras estos conceptos iniciales sobre lógica, se explorará brevemente su historia. Aunque se originó con distintos filósofos y pensadores de <strong>China</strong>, <strong>India</strong>, <strong>Grecia</strong> y <strong>Babilonia</strong>, la lógica aristotélica ha sido particularmente destacada. Las principales obras de Aristóteles dieron lugar a diferentes axiomas que constituyen la base de la lógica, entre los cuales se encuentran:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')  

    .row.mb-5.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.pb-md-3
        .row
          p.mb-5.px-5.px-md-0 Antes de definir la <strong>lógica matemática</strong>, es fundamental revisar los términos que la componen. En general, la palabra "lógica" se concibe como una disciplina de la filosofía dedicada al estudio de las inferencias. Al profundizar en su definición, la inferencia se comprende como el proceso mediante el cual una conclusión se sigue de una premisa, existiendo argumentos que pueden ser válidos o no, junto con métodos para identificarlos.
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Principio de no contradicción
                p.text-small.px-4.text-center.pb-2 Establece que algo no puede ser y no ser al mismo tiempo (A y ¬A no pueden ser ciertos a la vez).
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto(data-aos="fade-down")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Principio de identidad 
                p.text-small.px-4.text-center.pb-2 Determina que algo es siempre idéntico a sí mismo (A es siempre igual a A).
          .col-10.col-md-6.col-lg-4.mb-4.mb-md-0.mx-auto.mt-4.mt-lg-0(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Principio del tercero excluido
                p.text-small.px-4.text-center.pb-2 Afirma que algo es verdadero o no lo es, sin gradaciones posibles (A o ¬A).
    .row.mb-4
      p Estos fundamentos marcaron el inicio de la lógica, y existen más conceptos históricos y definiciones sobre argumentos, validez de los mismos, esquemas de argumentos y revisión de premisas. Además, la lógica se ha dividido en lógica formal e informal, áreas que se abordarán a lo largo de este documento.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-11.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px(data-aos="fade-up") Estos fundamentos marcaron el inicio de la lógica, y existen más conceptos históricos y definiciones sobre argumentos, validez de los mismos, esquemas de argumentos y revisión de premisas. Además, la lógica se ha dividido en lógica formal e informal, áreas que se abordarán a lo largo de este documento.
        p.mb-4 Por ahora, se introducirá la lógica matemática, una de las áreas de estudio esenciales en este curso. La lógica matemática se define como el estudio de estructuras formales que permiten representar de manera rigurosa el razonamiento deductivo. Emplea símbolos y reglas para establecer la validez de afirmaciones, verificando si, a partir de unas proposiciones iniciales (premisas), es posible llegar a una conclusión verdadera de manera consistente.
        p.text-bold Los componentes principales de la lógica matemática:


    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Perspectiva biológica 
              p.fs-18px Declaraciones que pueden ser verdaderas o falsas. Ejemplo: "El número 2 es par".
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="flip-up")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Conectores lógicos 
              p.fs-18px Operadores que crean proposiciones complejas a partir de proposiciones simples. Incluyen negación (¬), conjunción (∧), disyunción (∨), implicación (→), y bicondicional (↔), cada uno con reglas específicas sobre el valor de verdad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Cuantificadores 
              p.fs-18px Permiten generalizar proposiciones. Ejemplos: cuantificador universal (∀), que indica "para todo", y cuantificador existencial (∃), que indica "existe al menos uno".
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Sistemas formales 
              p.fs-18px Colecciones de axiomas y reglas utilizadas para derivar teoremas, como en la lógica de primer orden.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row
      p.mb-4.text-bold Algunos ejemplos son: 
    .row.mb-4.pb-2.justify-content-center.align-items-stretch
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="flip-right")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-16.png', style="width: 80px")
          div
            p.text-bold.mb-0 Proposición simple:
            p.px-1.text-small.mb-0.d-flex "El número 5 es primo".
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0(data-aos="flip-left")
        .custom-image-card.d-flex.align-items-center.p-3
          img.pe-2(src='@/assets/curso/unidad/img-17.png', style="width: 80px")
          div
            p.text-bold.mb-0 Proposición compuesta:
            p.px-1.text-small.mb-0.d-flex "Si el número 5 es primo, entonces 7 es impar" (usando implicación lógica).

    p La lógica matemática también incluye subramas como la teoría de conjuntos, la teoría de modelos, y la teoría de la computación, que amplían sus aplicaciones a otras áreas matemáticas y científicas.





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

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
