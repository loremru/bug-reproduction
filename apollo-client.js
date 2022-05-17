import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core/index.js"
import { setContext } from "@apollo/client/link/context"
import { from } from "@apollo/client/link/core"

const link = new HttpLink({ uri: "https://api.spacex.land/graphql/" })
const setLink = setContext(async (_, { headers }) => ({
	headers: {
		// authorization: getLocalStorageWithExpiry(TOKEN) || "",
		// "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET,
		// "X-Hasura-Role": "erp-admin",
	},
}))

const defaultOptions = {
	watchQuery: {
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
}

const cache = new InMemoryCache({})

export let MyClient = new ApolloClient({
	link: from([setLink.concat(link)]),
	cache,
	ssrMode: true,
	defaultOptions,
})
