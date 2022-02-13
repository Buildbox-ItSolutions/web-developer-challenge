import {createServer, Model} from 'miragejs'
import axios from 'axios'
import PhotoBase from '../images/photo-base.png'

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})


createServer({
    
    models: {
        message: Model
    },


    seeds(server){
        server.db.loadData({
            messages: [
                {
                    id: 1,                   
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
                    name: "Manuela Oliveira",
                    image: PhotoBase
                },
            ]
        })
    },


    routes(){
        this.namespace = "api";

        this.get('/messages', () => {
            return this.schema.all('message')
        })

        this.post('/messages', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('message', data)
        })

        this.delete('/messages/:id', (schema, request) => {
            const id = request.params.id

            return schema.messages.find(id).destroy()
        })
    }
})