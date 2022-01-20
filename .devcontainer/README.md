# Developing with Visual Studio Code + devcontainer

The easiest way to get started with custom integration development is to use Visual Studio Code with devcontainers. This approach will create a preconfigured development environment with all the tools you need.

In the container you will have a dedicated Home Assistant core instance running with your custom component code. You can configure this instance by updating the `./devcontainer/configuration.yaml` file.

**Prerequisites**

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Docker
    - For Linux, macOS, or Windows 10 Pro/Enterprise/Education use the [current release version of Docker](https://docs.docker.com/install/)
    - Windows 10 Home requires [WSL 2](https://docs.microsoft.com/windows/wsl/wsl2-install) and the current Edge version of Docker Desktop (see instructions [here](https://docs.docker.com/docker-for-windows/wsl-tech-preview/)). This can also be used for Windows Pro/Enterprise/Education.
- [Visual Studio code](https://code.visualstudio.com/)
- [Remote - Containers (VSC Extension)][extension-link]

[More info about requirements and devcontainer in general](https://code.visualstudio.com/docs/remote/containers#_getting-started)

[extension-link]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

**Getting started:**

1. Fork the repository.
2. Clone the repository to your computer.
3. Open the repository using Visual Studio code.

When you open this repository with Visual Studio code you are asked to "Reopen in Container", this will start the build of the container.

_If you don't see this notification, open the command palette and select `Remote-Containers: Reopen Folder in Container`._

### Tasks

The devcontainer comes with some useful tasks to help you with development, you can start these tasks by opening the command palette and select `Tasks: Run Task` then select the task you want to run.

When a task is currently running (like `Run Home Assistant on port 9123` for the docs), it can be restarted by opening the command palette and selecting `Tasks: Restart Running Task`, then select the task you want to restart.

The available tasks are:

| Task                                             | Description                                                                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Run Home Assistant on port 9123                  | Launch Home Assistant with your custom component code and the configuration defined in `.devcontainer/configuration.yaml`. |
| Run Home Assistant configuration against /config | Check the configuration.                                                                                                   |
| Upgrade Home Assistant to latest dev             | Upgrade the Home Assistant core version in the container to the latest version of the `dev` branch.                        |
| Install a specific version of Home Assistant     | Install a specific version of Home Assistant core in the container.                                                        |
| Serve Documentation on port 8000     | Serve MKDocs on port 8000 to review your changes               |

### Step by Step debugging

With the development container,
you can test your custom component in Home Assistant with step by step debugging.

You need to modify the `configuration.yaml` file in `.devcontainer` folder
by uncommenting the line:

```yaml
# debugpy:
```

Then launch the task `Run Home Assistant on port 9123`, and launch the debugger
with the existing debugging configuration `Python: Attach Local`.

For more information, look at [the Remote Python Debugger integration documentation](https://www.home-assistant.io/integrations/debugpy/).

### Test out this component

First we need to install some dependencies to get a basic Home Assistant instance working.

**Prerequisites**

```bash
# start terminal in contianer
pip install -r requirements_dev.txt
# install pre-commit
pre-commit install

# Configure git in devcontainer
git config user.name "John Doe"
git cofnig user.email "john_doe@gmail.com"

# Deps for pre-commit
sudo apt update
sudo apt install ruby
```

#### Install HACS

> Make sure running Task / Container is stopped

```bash
# Install deps
apt update; apt install unzip

# Install Hacs
wget -O - https://get.hacs.xyz | bash -
```

#### Add Integrations

- Run task: `Run Home Assistant on port 9123` described in [Tasks](#tasks)
- Head to: <http://localhost:9123>
    - create user
- Add HACS integration
- Go to HACS
    - Wait until Hacs is finished starting up.
    - Install `browser_mod` and optionally `Virtual Components`.
- Add lovelace-minimalist-ui integration.
- To get the best experience with the themes that come with the integration:
    - Go to Configuration -> Blueprints
        - Create an automation from `System Set Default Theme`, and select what theme you want. And after restart it will be set.
- Restart home assitant to make sure everything is located
