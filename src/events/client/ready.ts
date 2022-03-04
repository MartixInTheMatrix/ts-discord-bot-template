import { Client } from "../../structure/Client";

export default async (Client: Client)=>{
    console.log('ready')
    Client.user?.setActivity('ready')
}