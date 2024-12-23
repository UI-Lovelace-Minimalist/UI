#!/usr/bin/env python3

import requests

cards = (
    ('button-card', 'https://github.com/custom-cards/button-card/releases/download/v4.1.2/button-card.js'),
    ('light-entity-card', 'https://github.com/ljmerza/light-entity-card/releases/download/6.1.3/light-entity-card.js'),
    ('lovelace-auto-entities', 'https://raw.githubusercontent.com/thomasloven/lovelace-auto-entities/v1.13.0/auto-entities.js'),
    # card-mod: https://github.com/thomasloven/lovelace-card-mod/tree/3.1.2#performance-improvements
    ('lovelace-card-mod', 'https://raw.githubusercontent.com/thomasloven/lovelace-card-mod/v3.4.3/card-mod.js'),
    ('mini-graph-card', 'https://github.com/kalkih/mini-graph-card/releases/download/v0.12.1/mini-graph-card-bundle.js'),
    ('mini-media-player', 'https://github.com/kalkih/mini-media-player/releases/download/v1.16.9/mini-media-player-bundle.js'),
    ('my-cards', 'https://github.com/AnthonMS/my-cards/releases/download/v1.0.5/my-cards.js'),
    ('simple-weather-card', 'https://github.com/kalkih/simple-weather-card/releases/download/v0.8.5/simple-weather-card-bundle.js'),
    ('weather-radar-card', 'https://github.com/Makin-Things/weather-radar-card/releases/download/v2.1.1/weather-radar-card.js'),
    # for adaptive dashboard
    ('lovelace-layout-card', 'https://raw.githubusercontent.com/thomasloven/lovelace-layout-card/v2.4.5/layout-card.js'),
    ('lovelace-state-switch', 'https://raw.githubusercontent.com/thomasloven/lovelace-state-switch/1.9.5/state-switch.js'),
)

for card, src in cards:
    print(f"Fetching card: {card}")
    try:
        r = requests.get(src, allow_redirects=True)
        r.raise_for_status()

        open(f"custom_components/ui_lovelace_minimalist/cards/{card}/{card}.js", 'wb').write(r.content)
    except Exception as e:
        print(f"ERROR: {e}")
        exit(1)
