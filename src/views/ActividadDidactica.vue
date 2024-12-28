<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas de Demostración Matemática',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión de las diferentes técnicas y métodos de demostración matemática.',
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
}
</script>
