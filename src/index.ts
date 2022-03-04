import discord from "discord.js";
import { Client } from "./structure/Client"


export const client = new Client('ODMwNDU4MjY1NDMwMTMwNzM5.YHG-hw.ukjMrTTm_uYmlmPAGIm80bX9QfM')
client.init('./build/commands', './build/events')

