<template>
  <div class="about">
    <saludo message="Hola, mundo" ref="saludoGuay"></saludo>
    <br>
    <vue-signature-pad width="100%" height="500px" ref="signaturePad" :options="strokeOptions"></vue-signature-pad>
    <button @click="clear">Clear</button>
    <button @click="save">Save</button>
  </div>
</template>

<script setup>

import { onMounted,onUpdated,onUnmounted,onBeforeMount,onBeforeUpdate,onBeforeUnmount,onErrorCaptured,onRenderTracked,onRenderTriggered,onActivated,onDeactivated,onServerPrefetch, ref, watch} from 'vue'
//import { defineAsyncComponent } from 'vue'
import { VueSignaturePad } from 'vue-signature-pad'
import Saludo from '../components/Saludo.vue'


    //const Saludo = defineAsyncComponent(() => import('../components/Saludo.vue'))
   

    const signaturePad=ref()
    const saludoGuay=ref()
 
    const strokeOptions = {
      dotSize: (0.5 + 2.5) / 2,
      minWidth: 1.5,
      maxWidth: 2.5,
      throttle: 16,
      minDistance: 5,
      backgroundColor: 'rgba(0,255,0,0.1)',
      penColor: 'red',
      velocityFilterWeight: 0.7,
    }


    const undo=()=>{
      signaturePad.value.undoSignature();
    }

    const clear=()=>{
      signaturePad.value.clearSignature();
      saludoGuay.value.changeSaludo("Bien limpiado!!")
    }

    const save=()=> {
      const { isEmpty, data } = signaturePad.value.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
 
  console.log('Se llamó setup')

    onMounted(()=>{
      console.log('Se llamó onMounted')
    })
    onUpdated(()=>{
      console.log('Se llamó onUpdated')
    })
    onUnmounted(()=>{
      console.log('Se llamó onUnmounted')
    })
    onBeforeMount(()=>{
      console.log('Se llamó onBeforeMount')
    })
    onBeforeUpdate(()=>{
      console.log('Se llamó onBeforeUpdate')
    })
    onBeforeUnmount(()=>{
      console.log('Se llamó onBeforeUnmount')
    })
    onErrorCaptured(()=>{
      console.log('Se llamó onErrorCaptured')
    })
    onRenderTracked(()=>{
      console.log('Se llamó onRenderTracked')
    })
    onRenderTriggered(()=>{
      console.log('Se llamó onRenderTriggered')
    })
    onActivated(()=>{
      console.log('Se llamó onActivated')
    })
    onDeactivated(()=>{
      console.log('Se llamó onDeactivated')
    })
    onServerPrefetch(()=>{
      console.log('Se llamó onServerPrefetch')
    })

</script>

