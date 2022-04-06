#!/usr/bin/env python3

import requests

cards = (
    ('button-card', 'https://github.com/custom-cards/button-card/releases/download/3.4.1/button-card.js'),
    ('light-entity-card', 'https://github.com/ljmerza/light-entity-card/releases/download/4.5.0/light-entity-card.js'),
    ('lovelace-auto-entities', 'https://raw.githubusercontent.com/thomasloven/lovelace-auto-entities/1.11.0/auto-entities.js'),
    # card-mod: https://github.com/thomasloven/lovelace-card-mod/tree/3.1.2#performance-improvements
    ('lovelace-card-mod', 'https://raw.githubusercontent.com/thomasloven/lovelace-card-mod/3.1.4/card-mod.js'),
    ('mini-graph-card', 'https://github.com/kalkih/mini-graph-card/releases/download/v0.11.0-dev.5/mini-graph-card-bundle.js'),
    ('mini-media-player', 'https://github.com/kalkih/mini-media-player/releases/download/v1.16.2/mini-media-player-bundle.js'),
    ('my-cards', 'https://raw.githubusercontent.com/AnthonMS/my-cards/main/dist/my-cards.js'),
    ('simple-weather-card', 'https://github.com/kalkih/simple-weather-card/releases/download/v0.8.2/simple-weather-card-bundle.js'),
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
