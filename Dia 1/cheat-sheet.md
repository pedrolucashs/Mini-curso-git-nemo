# Comandos e suas utilidades

## Clonar repositório
git clone <url>

## Criar nova branch
git branch <nome>

## Sair da branch atual e ir para outra
git checkout <nome>

## Adiciona o arquivo atual à "cesta" de arquivos a serem "commitados"
git add .

## Fazer commit (checkpoint) do código e anexar uma mensagem (descrevendo o que foi implementado, ou que quebrou)
git commit -m "mensagem"

## Ver histórico de commits
git log

## Envia o commit para o GitHub a branch escohlhida 
git push origin <branch>

## "Puxa" o código mais recente daquela branch para o seu computador
git pull

### Git Pull é a junção de dois comandos: git fetch e git merge.
### Esse comando faz o download dos arquivos mais recentes porém não altera os existentes no seu computador, permitindo comparações.
git fetch origin

## Mescla a branch atual e seus arquivos à branch escolhida
git merge <branch>