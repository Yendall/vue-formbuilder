<template>
  <div>
    <v-select v-model="value" placeholder="Select" :options="options">
    </v-select>
  </div>
</template>


<script>
  export default {
    name: 'SelectList',
    props: ['currentField'],
    data(){
    	return {
    	  rendered: false,
    	  options: [],
    		value: ""
    	}
    },
    methods: {
      getOptions(){
        this.options = this.currentField.options.map(
          function (i) {
            return {label: i.optionLabel, value: i.optionValue}
          })
        this.rendered = true
        return this.options
      },
    },
    mounted () {
      this.getOptions()
    }
  }
</script>
