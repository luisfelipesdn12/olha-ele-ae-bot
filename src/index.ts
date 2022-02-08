import { Client, VoiceChannel, VoiceConnection } from 'discord.js';
import ytdl from 'ytdl-core';
import config from './config';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
});

const WELCOME_SOUNDS = ['W8ab00LC-JQ'];

const DISCORD_CLIENT = new Client(config.client);

DISCORD_CLIENT.on('ready', async () => {
  console.log(`Logged in as ${DISCORD_CLIENT.user?.tag}!`);
});

DISCORD_CLIENT.on('voiceStateUpdate', async (oldState, newState) => {
  // ignore bots
  if (oldState?.member?.user?.bot) return;
  // ignore common state updates
  if (oldState?.mute !== newState.mute) return;
  if (oldState?.deaf !== newState.deaf) return;
  if (oldState?.speaking !== newState.speaking) return;
  if (oldState?.streaming !== newState.streaming) return;

  // left
  if (newState.channelID === null) {
    console.log('user left channel', oldState.channelID);
    // if (newState.channel) playWelcomeMessage(newState.channel);
  }
  // joined
  else if (oldState.channelID === null) {
    console.log('user joined channel', newState.channelID);

    if (newState.channel) playWelcomeMessage(newState.channel);
  }
  // moved
  else {
    console.log('user moved channels', oldState.channelID, newState.channelID);
    if (newState.channel) playWelcomeMessage(newState.channel);
  }
});

async function playWelcomeMessage(voiceChannel: VoiceChannel): Promise<VoiceConnection> {
  const conn = await voiceChannel.join();
  conn
    ?.play(ytdl(WELCOME_SOUNDS[~~(Math.random() * WELCOME_SOUNDS.length)], { filter: (f) => !f.hasVideo, range: { end: 150000 } }))
    .on('finish', () => conn?.disconnect());
  return conn;
}

DISCORD_CLIENT.login(config.bot.token);
