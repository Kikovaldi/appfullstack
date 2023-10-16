<template>
  <h1 class="text-3xl font-bold underline text-blue-600">Hello world!</h1>
  <button class="bg-slate-500" @click.prevent="getFrases">get frases</button>
  <button class="bg-slate-500" @click.prevent="getFrasesF">get frases F</button>
  <button class="bg-slate-500" @click.prevent="getFrasesV">get frases V</button>
  <button class="bg-slate-500" @click.prevent="createFraseV">get frase</button>
  <button class="bg-slate-500" @click.prevent="deleteFrase">Delete</button>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      frases: [],
      part1: "",
      part2: "",
      part3: "",
    };
  },
  methods: {
    async getFrases() {
      const response = await fetch("http://localhost:2322/api/frases1");
      const data = await response.json();
      return (this.frases = data.data);
    },
    async getFrasesF() {
      const response = await fetch("http://localhost:2322/api/frasesfinal");
      const data = await response.json();
      return (this.frases = data.data);
    },
    async getFrasesV() {
      const response = await fetch("http://localhost:2322/api/variables");
      const data = await response.json();
      return (this.frases = data.data);
    },
    async getFrase(id) {
      const response = await fetch(`http://localhost:2322/api/frases1/${id}`);
      const data = await response.json();
      return (this.frases = data.data[0]);
    },
    async getFraseF(id) {
      const response = await fetch(`http://localhost:2322/api/frasesfinal/${id}`);
      const data = await response.json();
      return (this.frases = data.data[0]);
    },
    async getFraseV(id) {
      const response = await fetch(`http://localhost:2322/api/variables/${id}`);
      const data = await response.json();
      return (this.frases = data.data[0]);
    },
    async createFrase() {
      const newVariable = {
       verbo: this.verbo,
       nombre: this.nombre,
       lugar: this.lugar, 
       adjetivo: this.adjetivo,
       nombrefamoso: this.nombrefamoso,
       nombre2: this.nombre2
      };
      this.verbo = "",
       this.nombre = "",
       this.lugar = "",
       this.adjetivo= "",
       this.nombrefamoso = "",
       this.nombre2 = ""
       const response = await fetch("http://localhost:2322/api/variables", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newVariable),
      });
      const data = await response.json();
      return this.getProducts();
    },
    async deleteFrase(id) {
      try{
        const response = await fetch(
        `http://localhost:2322/api/frasefinal/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      return this.getFrases();

      }catch(err){
        console.log(err, "deletProduct failed")
      }
    },
  },
}
</script>
