import { lovelace_view, load_lovelace, lovelace, hass } from "card-tools/src/hass";
import {
  applyThemesOnElement,
  getLovelace
} from 'custom-card-helpers';
import { fireEvent } from "card-tools/src/event";
import './initialize';

// window.mobileAndTabletCheck = function () {
//   let check = false;
//   (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
//   return check;
// };

class LovelaceMinimalistUi {
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async _getConfig() {
    let lovelace_load;
    while (!lovelace_load) {
      lovelace_load = getLovelace();
      if (!lovelace_load) {
        await this.sleep(500);
      }
    }
    this.lovelace_load = getLovelace();
    this.frontend_stuff();
  }

  _connect() {
    if (!window.hassConnection) {
      window.setTimeout(() => this._connect(), 100);
    } else {
      window.hassConnection.then((conn) => this.connect(conn.conn));
    }
  }

  constructor() {
    this._connect();

    window.setTimeout(this._getConfig.bind(this), 500);
  }

  getRoot() {
    let root = document.querySelector('home-assistant');
    root = root && root.shadowRoot;
    root = root && root.querySelector('home-assistant-main');
    root = root && root.shadowRoot;
    root = root && root.querySelector('app-drawer-layout partial-panel-resolver');
    root = root && root.shadowRoot || root;
    root = root && root.querySelector('ha-panel-lovelace');
    root = root && root.shadowRoot;
    root = root && root.querySelector('hui-root');
    return root;
  }

  frontend_stuff() {
    let lovelace = getLovelace();
    // console.info(lovelace);
    if (lovelace) {
      if (lovelace.config) {
        if (lovelace.config.ui_lovelace_minimalist) {
          // this.set_theme(lovelace.config.ui_lovelace_minimalist);

          // console.log(lovelace.config.ui_lovelace_minimalist);
        }
      }
    }
  }

  // set_theme(config) {
  //   // Only applying after refresh when on the dashbaord. but after moving to ohter pages. setting is gone, For now solved with Blueprint
  //   const root = this.getRoot();

  //   if (!root.getAttribute("data-ui-lovelace-minimalist-theme")) {
  //     root.setAttribute("data-ui-lovelace-minimalist-theme", true);

  //     //See if user has set default HA theme or Lovelace Minimalist Theme
  //     if (config.theme !== "HA selected theme") {
  //       let sunState = "";
  //       if (hass().states["sun.sun"]) {
  //         sunState = hass().states["sun.sun"].state;
  //       } else {
  //         console.log('sun.sun not available!');
  //       }
  //       const themes = { themes: JSON.parse(config.themes) }
  //       let theme = "minimalist-desktop-light"

  //       switch (config.theme) {
  //         case "minimalist-desktop-light":
  //           theme = "minimalist-desktop-light"
  //           break;
  //         case "minimalist-desktop-dark":
  //           theme = "minimalist-mobile-dark"
  //           break;
  //         case "minimalist-mobile-light":
  //           theme = "minimalist-desktop-light"
  //           break;
  //         case "minimalist-mobile-dark":
  //           theme = "minimalist-mobile-dark"
  //           break;
  //         default:
  //           theme = "minimalist-desktop"
  //           break;
  //       }
  //       console.log("Setting Theme: ", theme)

  //       applyThemesOnElement(root, themes, theme, true);
  //     }
  //   }
  // }

  connect(conn) {
    this.conn = conn
    conn.subscribeEvents(() => this._reload(), "ui_lovelace_minimalist_reload");
  }

  _reload() {
    const ll = lovelace_view();
    if (ll)
      fireEvent("config-refresh", {}, ll);
    let path = window.location.pathname;
    let nav_path = path.substring(1, path.lastIndexOf('/'));

    setTimeout(function () {
      document.location.reload()
    }, 1000);
  }
}

window.ui_lovelace_minimalist = window.ui_lovelace_minimalist || new LovelaceMinimalistUi();

// const bases = [customElements.whenDefined('hui-masonry-view'), customElements.whenDefined('hc-lovelace')];
// Promise.race(bases).then(() => {
//   window.ui_lovelace_minimalist = window.ui_lovelace_minimalist || new LovelaceMinimalistUi();

// });
