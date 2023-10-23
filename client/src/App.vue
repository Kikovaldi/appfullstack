<template>
  <div class="flex justify-center items-center">
    <img src="./images/frases2.png" alt="" />
  </div>

  <form class="">
    <div class="py-4 flex flex-col place-items-center">
      <label class="font-bold">Autor/a</label>
      <input
        v-model="autor"
        class="border-2"
        type="text"
        placeholder="Escribe tu nombre"
      />
    </div>
    <div class="grid max-sm:grid-cols-1 grid-cols-3 px-4 items-center">
      <div class="flex flex-col px-4">
        <label>Nombre común</label>
        <input
          v-model="nombre"
          class="border-2"
          type="text"
          placeholder="ej: Coche, bici, piruleta"
        />
      </div>
      <div class="flex flex-col px-4">
        <label>Nombre Conocido</label>
        <input
          v-model="nombrefamoso"
          class="border-2"
          type="text"
          placeholder="ej: Adolf Hitler"
        />
      </div>
      <div class="flex flex-col px-4">
        <label>Lugar</label>
        <input
          v-model="lugar"
          class="border-2"
          type="text"
          placeholder="ej: Barcelona, Marte, agujero"
        />
      </div>
      <div class="flex flex-col px-4">
        <label>Verbo</label>
        <input
          v-model="verbo"
          class="border-2"
          type="text"
          placeholder="ej: reír, comer, sudar"
        />
      </div>
      <div class="flex flex-col px-4">
        <label>Nombre Común</label>
        <input
          v-model="nombre2"
          class="border-2"
          type="text"
          placeholder="ej: mesa, silla, zapato"
        />
      </div>
      <div class="flex flex-col px-4">
        <label>Adjetivo</label>
        <input
          v-model="adjetivo"
          class="border-2"
          type="text"
          placeholder="ej: bonito, grande, preciosa"
        />
      </div>
    </div>
  </form>
  <h2 class="flex text-xl justify-center font-bold text-fuchsia-900 cursor-vertical-text">Tu frase</h2>
  <p class="flex italic text-2xl justify-center font-bold text-fuchsia-800 cursor-vertical-text">{{ frase1 }}</p>

  <div class="grid grid-cols-6 max-sm:grid-cols-1 px-4 mx-4 gap-6 justify-center py-6">
    <!-- boton para hacer el get de la plantilla  + las variables y postearlo en la frase Final -->
    <button
      class="bg-green-400 rounded-lg py-1 px-4"
      @click.prevent="getFrase1(1)"
    >
      Frase 1
    </button>
    <button
      class="bg-violet-400 rounded-lg py-1 px-4"
      @click.prevent="getFrase2(2)"
    >
      Frase 2
    </button>
    <button
      class="bg-blue-400 rounded-lg py-1 px-4"
      @click.prevent="getFrase3(3)"
    >
      Frase 3
    </button>
    <button
      class="bg-orange-400 rounded-lg py-1 px-4"
      @click.prevent="getFrase4(4)"
    >
      Frase 4
    </button>
    <!-- botón para guardar en la web la frase -->
    <button
      class="bg-yellow-300 rounded-lg py-1 px-4"
      @click.prevent="createFraseF"
    >
      Guardar
    </button>
    <!-- borrar frase -->
    <button
      class="bg-red-400 rounded-lg py-1 px-4"
      @click.prevent="deleteAll"
    >
      Borrar
    </button>
  </div>
  <div class="bg-slate-500"></div>

  <!-- <div>{}
    <button class=" bg-green-300" @click="getFrase(1)">Obtener Frase</button>
    <p>Parte 1: {{ frase.part1 }}</p>
    <p>Parte 2: {{ part2 }}</p>
    <p>Parte 3: {{ part3 }}</p>
  </div> -->
  <!-- <div class="flex justify-between">
  <h1>{{ frases[0].part1 }}{{ verbo }}{{ nombre }}{{ frases[0].part2 }}</h1>
    <button class="bg-slate-500" @click.prevent="getFrases">get frases</button>
    
    <button class="bg-slate-500" @click.prevent="getFrasesV">
      get frases V
    </button>
    <button class="bg-slate-500" @click.prevent="createFraseV">
      get frase
    </button>
    <button class="bg-slate-500" @click.prevent="deleteFrase">Delete</button>
  </div> -->
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      plantilla: "",
      plantilla2: "",
      plantilla3: "",
      plantilla4: "",
      nuevoRegistro: "",
      frase: "",
      frase1: "",
      frase2: "",
      frase3: "",
      frase4: "",
      frasesfinal: "",
      frasesV: "",
      part1: "",
      part2: "",
      part3: "",
      nombre: "",
      adjetivo: "",
      nombrefamoso: "",
      lugar: "",
      verbo: "",
      nombre2: "",
      autor: "",
      newFrase:"",
    };
  },
  methods: {
    async getFrase1(id) {
      try {
        const response = await fetch(`http://localhost:2322/api/frases1/${id}`);
        const data = await response.json();
        const frase = data.data[0];
        console.log(frase);
        (this.part1 = frase.part1),
          (this.part2 = frase.part2),
          (this.part3 = frase.part3),
          (this.frase1 = `"${this.part1} ${this.verbo} ${this.nombre} ${this.part2} ${this.lugar} ${this.part3} ${this.adjetivo}". By: ${this.autor} `);
      } catch (err) {
        console.log(err, "cannot get");
      }
    },

    async getFrase2(id) {
      try {
        const response = await fetch(`http://localhost:2322/api/frases1/${id}`);
        const data = await response.json();
        const frase = data.data[0];
        console.log(frase);
        (this.part1 = frase.part1),
          (this.part2 = frase.part2),
          (this.part3 = frase.part3),
          (this.frase1 = `"${this.part1} ${this.verbo} ${this.nombre} ${this.part2} ${this.lugar} ${this.part3} ${this.adjetivo}". By: ${this.autor} `);
      } catch (err) {
        console.log(err, "cannot get");
      }
    },

    async getFrase3(id) {
      try {
        const response = await fetch(`http://localhost:2322/api/frases1/${id}`);
        const data = await response.json();
        const frase = data.data[0];
        console.log(frase);
        (this.part1 = frase.part1),
          (this.part2 = frase.part2),
          (this.part3 = frase.part3),
          (this.frase1 = `"${this.part1} ${this.nombre} ${this.part2} ${this.adjetivo} ${this.part3} ${this.verbo}". By: ${this.autor} `);
      } catch (err) {
        console.log(err, "cannot get");
      }
    },

    async getFrase4(id) {
      try {
        const response = await fetch(`http://localhost:2322/api/frases1/${id}`);
        const data = await response.json();
        const frase = data.data[0];
        console.log(frase);
        (this.part1 = frase.part1),
          (this.part2 = frase.part2),
          (this.part3 = frase.part3),
          (this.frase1 =`"${this.part1} ${this.nombrefamoso}  ${this.part2} ${this.verbo} ${this.part3} ${this.adjetivo}". By: ${this.autor} `);
      } catch (err) {
        console.log(err, "cannot get");
      }
    },
    async getFrasesV() {
      try {
        const response = await fetch("http://localhost:2322/api/variables");
        const data = await response.json();
        return (this.frase = data.data);
      } catch (err) {
        console.log(err, "cannot get");
      }
    },

   
    async getFraseF(id) {
      const response = await fetch(
        `http://localhost:2322/api/frasesfinal/${id}`
      );
      const data = await response.json();
      return (this.frases = data.data[0]);
    },
   
    async createFraseF() {
      const newFrase = {
        autor: this.autor,
        frase1: this.frase1,
        frase2: this.frase2,
        frase3: this.frase3,
        frase4: this.frase4
      };
      const response = await fetch("http://localhost:2322/api/frasefinal", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newFrase),
      });
      const data = await response.json();
      return getfrase(id);
    },
    async deleteFrase(id) {
      try {
        const response = await fetch(
          `http://localhost:2322/api/frasefinal/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        return this.getFrases();
      } catch (err) {
        console.log(err, "deletProduct failed");
      }
    },
    deleteAll() {
      (this.verbo = ""),
        (this.nombre = ""),
        (this.lugar = ""),
        (this.adjetivo = ""),
        (this.nombrefamoso = ""),
        (this.nombre2 = ""),
        (this.part1 = ""),
        (this.part2 = ""),
        (this.part3 = ""),
        (this.frase1 = ""),
        (this.frase2 = ""),
        (this.frase3 = ""),
        (this.frase4 = ""),
        (this.autor = "");
    
      return this.deleteAll();
    },
  }
}

</script>
