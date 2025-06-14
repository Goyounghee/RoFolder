# MTMxNTEzODY3ODMwNTE5ODE2MQ.G4vOYQ.W2kCb7D8k-urTbQuJeP6KbQON0JF5wHv7IQhMc / 1303359087974813726 / 1310042645774602360


import discord
from discord import app_commands
from discord.ext import commands
import asyncio
import json
import os

FORUM_CHANNEL_ID = 1310042645774602360  # 여기에 포럼 채널 ID 입력
OUTPUT_FILE = "foreign_new.js"

class ForeignJSBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        super().__init__(command_prefix="!", intents=intents)

    async def setup_hook(self):
        self.tree.add_command(export_forum)
        await self.tree.sync()

bot = ForeignJSBot()

@app_commands.command(name="export_forum", description="포럼 채널의 모든 포스트 정보를 foreign_new.js로 저장")
async def export_forum(interaction: discord.Interaction):
    await interaction.response.defer()

    forum_channel = interaction.guild.get_channel(FORUM_CHANNEL_ID)
    if not isinstance(forum_channel, discord.ForumChannel):
        await interaction.followup.send("지정된 채널이 포럼 채널이 아닙니다.")
        return

    threads = []

    # 활성 쓰레드 수집
    threads.extend(forum_channel.threads)

    # 아카이브된 쓰레드 수집
    async for archived in forum_channel.archived_threads(limit=None):
        threads.append(archived)

    servers = []

    for thread in threads:
        try:
            starter_message = await thread.fetch_message(thread.id)
        except discord.NotFound:
            continue

        servers.append({
            "title": thread.name,
            "description": starter_message.content
        })

    # foreign_new.js 생성
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("const foreignServers = ")
        json.dump(servers, f, indent=4, ensure_ascii=False)
        f.write(";")

    await interaction.followup.send(f"{len(servers)}개의 포스트 정보를 '{OUTPUT_FILE}' 파일로 저장했습니다.")

bot.run("MTMxNTEzODY3ODMwNTE5ODE2MQ.G4vOYQ.W2kCb7D8k-urTbQuJeP6KbQON0JF5wHv7IQhMc")
