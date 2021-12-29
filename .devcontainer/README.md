# dev

```bash
# Open folder in container
code .

# Could ask to reopen in container, Click yes
```

```bash
container# container install

container# container set-version
# enter: 2021.12.6

container# container start

# Install some deps
apt update
apt install unzip
# install hacs
wget -O - https://get.hacs.xyz | bash -
```

- Head to: http://localhost:9123
    - create user
- restart home assistant to relaod integrations
- add hacs integration
- add lovelace-minimalist-ui integration
- go to hacs
    - add integration repos:
        - browser_mod
        - virtual components
- Restart home assitant to make sure everything is locaded