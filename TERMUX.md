# 📱 Rodando o Knight Bot no Termux (Android)

Guia completo para rodar o bot direto no seu celular com o Termux.

---

## 1. Instalar o Termux

Instale o **Termux** pelo do site oficial (a versão da Play Store está desatualizada):

> https://f-droid.org/packages/com.termux/

Após instalar, conceda permissão de armazenamento:

```bash
termux-setup-storage
```

---

## 2. Instalar os pacotes necessários

```bash
pkg update && pkg upgrade
pkg install nodejs-lts git ffmpeg tmux -y
```

- `nodejs-lts` → roda o bot
- `git` → clonar o repositório
- `ffmpeg` → converter áudio/vídeo e stickers
- `tmux` → manter o bot rodando em segundo plano

---

## 3. Baixar e instalar o bot

```bash
git clone https://github.com/cleberleonheart-maker/Knightbot-MD
cd Knightbot-MD
npm install
```

### Se o `npm install` falhar no sharp

O **sharp** (processamento de imagens) às vezes não tem binário pronto no Termux.
Nesse caso instale as ferramentas de compilação e tente de novo:

```bash
pkg install binutils make python -y
npm install --build-from-source 2>/dev/null || npm install
```

---

## 4. Configurar o bot

Crie o arquivo de configuração e edite com seu número:

1. Copie o exemplo:
   ```bash
   cp .env.example .env
   ```
2. Edite o arquivo:
   ```bash
   nano .env        # ou use outro editor (vi, etc.)
   ```
3. Ajuste pelo menos:
   - `OWNER_NUMBER` → seu número com código do país, sem `+` e sem espaços (ex.: `5511999999999`)
   - `BOT_OWNER` → seu nome
   - opcionalmente `BOT_NAME` e `PACKNAME`

Salve (`Ctrl+X`, `Y`, `Enter` no nano).

---

## 5. Rodar o bot

**Primeira vez** (gera código de pareamento / QR):

```bash
npm start
```

Anote o **pairing code** que aparece e coloque no WhatsApp:
*Configurações → Aparelhos conectados → Conectar um aparelho*.

Depois do login funcionar, pare com `Ctrl+C`.

Para rodar em segundo plano sem que o app feche o bot:

```bash
termux-wake-lock            # mantém o celular acordado
tmux new -s bot -d          # cria sessão em segundo plano
./run.sh start              # inicia o bot dentro da sessão
tmux attach -t bot          # volta para ver os logs (sair: Ctrl+B, depois D)
```

---

## 6. Comandos úteis

| Comando | Função |
|---|---|
| `./run.sh start` | inicia o bot (com flags de memória) |
| `./run.sh fresh` | apaga a sessão e pede login novo |
| `./run.sh clean` | limpa arquivos temporários e inicia |
| `tmux attach -t bot` | volta à sessão do bot |
| `tmux kill-session -t bot` | encerra o bot de vez |
| `termux-wake-lock` | evita que o celular "durma" |

---

## 7. Atualizar o bot

```bash
cd Knightbot-MD
git pull
npm install
./run.sh fresh       # ou ./run.sh start se a sessão continuar válida
```

---

## ⚠️ Dicas

- **Não deixe o Termux ser morto pelo Android**: ative *bateria ilimitada* para o Termux e desative a otimização de bateria.
- O bot mantém conexão com seu WhatsApp da mesma conta; evite bater o limite de aparelhos conectados.
- Use com responsabilidade — conta pode ser banida pelo WhatsApp por uso indevido.

---

## 🐛 Problemas comuns

**`Cannot find module 'dotenv'`** → o `npm install` não terminou. Rode:
```bash
npm install dotenv && npm install
```

**Erro ao compilar o sharp** → veja a seção 2 (comandos do binutils/make/python).

**Bot desconecta sozinho** → verifique se o `termux-wake-lock` está ativo e se a bateria não está sendo otimizada para o Termux.

**Pairing code não aparece** → rode `./run.sh fresh` para limpar a sessão antiga.