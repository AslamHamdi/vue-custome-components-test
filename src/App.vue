

<template>
<div class="w-full h-full" style="padding-top: 100px; padding-bottom: 100px;">
    <div>
      <div class="content-center h-fit p-8">
        <h1 class="font-bold text-2xl flex items-center justify-center">Vue 3 Custom components</h1>
        <h3 class="flex items-center justify-center pt-2">Click the button below to fire the alert !</h3>
        <div class="flex items-center justify-center">
          <span class="flex items-center justify-center text-4xl pt-2">👇</span>
        </div>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" @click="showAlert('info', 'all')"/>
        <ml-button variation="left-icon-text" @click="showAlert('info', 'title-content')"/>
        <ml-button variation="text-only" @click="showAlert('info', 'content-only')"/>
        <ml-button variation="icon-only" @click="showAlert('info', 'title-only')"/>
        <ml-button variation="text-only" state="disabled" text="Disabled"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="error" @click="showAlert('error', 'all')"/>
        <ml-button variation="left-icon-text" type2="error" @click="showAlert('error', 'title-content')"/>
        <ml-button variation="text-only" type2="error" @click="showAlert('error', 'content-only')"/>
        <ml-button variation="icon-only" type2="error" @click="showAlert('error', 'title-only')"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="error"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="warning" @click="showAlert('warning', 'all')"/>
        <ml-button variation="left-icon-text" type2="warning" @click="showAlert('warning', 'title-content')"/>
        <ml-button variation="text-only" type2="warning" @click="showAlert('warning', 'content-only')"/>
        <ml-button variation="icon-only" type2="warning" @click="showAlert('warning', 'title-only')"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="warning"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button variation="right-icon-text" type2="success" @click="showAlert('success', 'all')"/>
        <ml-button variation="left-icon-text" type2="success" @click="showAlert('success', 'title-content')"/>
        <ml-button variation="text-only" type2="success" @click="showAlert('success', 'content-only')"/>
        <ml-button variation="icon-only" type2="success" @click="showAlert('success', 'title-only')"/>
        <ml-button variation="text-only" state="disabled" text="Disabled" type2="success"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" @click="showAlert('info', 'all')"/>
        <ml-button type="secondary" variation="left-icon-text" @click="showAlert('info', 'title-content')"/>
        <ml-button type="secondary" variation="text-only" @click="showAlert('info', 'content-only')"/>
        <ml-button type="secondary" variation="icon-only" @click="showAlert('info', 'title-only')"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="error" @click="showAlert('error', 'all')"/>
        <ml-button type="secondary" variation="left-icon-text" type2="error" @click="showAlert('error', 'title-content')"/>
        <ml-button type="secondary" variation="text-only" type2="error" @click="showAlert('error', 'content-only')"/>
        <ml-button type="secondary" variation="icon-only" type2="error" @click="showAlert('error', 'title-only')"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="error"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="warning" @click="showAlert('warning', 'all')"/>
        <ml-button type="secondary" variation="left-icon-text" type2="warning" @click="showAlert('warning', 'title-content')"/>
        <ml-button type="secondary" variation="text-only" type2="warning" @click="showAlert('warning', 'content-only')"/>
        <ml-button type="secondary" variation="icon-only" type2="warning" @click="showAlert('warning', 'title-only')"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="warning"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-button type="secondary" variation="right-icon-text" type2="success" @click="showAlert('success', 'all')"/>
        <ml-button type="secondary" variation="left-icon-text" type2="success" @click="showAlert('success', 'title-content')"/>
        <ml-button type="secondary" variation="text-only" type2="success" @click="showAlert('success', 'content-only')"/>
        <ml-button type="secondary" variation="icon-only" type2="success" @click="showAlert('success', 'title-only')"/>
        <ml-button type="secondary" variation="text-only" state="disabled" text="Disabled" type2="success"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert :visible="true"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="info"  header="header" :visible="true"/>
        <ml-alert type="error"  header="Header" :visible="true"/>
        <ml-alert type="warning"  header="Header" :visible="true"/>
        <ml-alert type="success"  header="Header" :visible="true"/>
      </div>

      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="info" header="This is default" variation="all" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="error" header="This is title only" variation="title-only" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="warning" header="This is content only" variation="content-only" content="This is content only. Lorem ipsum dolor sit amet consectetur adipisicing elit" :visible="true"/>
      </div>
      <div class="flex justify-center items-center space-x-8 h-fit p-8">
        <ml-alert type="success" header="This is title and content" variation="title-content" :visible="true"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    inject: ['MLAlert'],
    setup(){

    },
    data() {
      return {
        mlAlert: this.MLAlert
      }
    },
    mounted(){

        this.mlAlert({
            header: 'Inject header',
            variation: 'content-only'
        })

        setTimeout(() => {
            this.mlAlert({
                header: 'Inject header2',
                variation: 'all'
            })
        }, 900)


    },
    methods: {
      showAlert(type, variation){
        this.mlAlert({
            header: 'This is header',
            type: type,
            variation: variation,
            content: 'This is a content. Content is a subject or ideas contained in something written, said, created, or represented',
            textButton1: "Btn 1",
            textButton2: "Btn 2"
        })
      },
    }
}
</script>
