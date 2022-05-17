import { defineNuxtPlugin } from "#app"
import { ApolloClients } from "@vue/apollo-composable"
import { MyClient } from "~/apollo-client"

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.provide(ApolloClients, {
		default: MyClient,
	})
})
