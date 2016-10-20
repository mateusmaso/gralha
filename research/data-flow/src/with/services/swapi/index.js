import {adapter} from "graphql-jay-hyperschema"
import fetch from "isomorphic-fetch"
import perf from "../../../perf"

var url = "http://localhost:8000/api"

export default function swapi() {
  return fetch(`${url}/schema`).then((response) => {
    return response.json()
  }).then((schema) => {
    var wrapper = {
      Query: {
        "allFilms": "allFilms.results"
      }
    }

    return {
      url,
      schema,
      adapter,
      wrapper,
      fetch: perf.monitorFetch(fetch)
    }
  })
}
