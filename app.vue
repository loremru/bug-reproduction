<template>
  <div>
    {{ data.data.launches[0] }}
  </div>
</template>


<script setup>
import {ref} from 'vue'
import {MyClient} from "./apollo-client"
import {testQuery} from "./graphql/query"

// console.log(await MyClient.query({query: testQuery}))
const {data} = useAsyncData("cat", () => MyClient.query({query: testQuery}))
</script>
