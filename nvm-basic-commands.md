# FOR SET UP NODE VERSION

- List lts node versions
```shell
nvm ls
```
- Download and set version using its name
```shell
nvm install lts/hydrogen
```

- Add this node version by default (its useful for codespaces, for example)
```shell
nvm alias default lts/hydrogen
```

- Other solution, is using the .nvmrc (nvm run command), this this useful to set the default by using for you or other persons, after the file is created, run the following command
```shell
nvm install
```
