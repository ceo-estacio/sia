/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(disciplinas)` | `/(disciplinas)/estruturaDeDados` | `/(disciplinas)/estruturaDeDados/` | `/(disciplinas)/estruturaDeDados/exercicios` | `/(disciplinas)/estruturaDeDados/tema-2` | `/(disciplinas)/estruturaDeDados/tema-2/c` | `/(disciplinas)/estruturaDeDados/tema-3` | `/(disciplinas)/estruturaDeDados/tema-4` | `/(disciplinas)/estruturaDeDados/tema-5` | `/(disciplinas)/estruturaDeDados/tema-6` | `/(drawer)` | `/(drawer)/` | `/(drawer)/(tabs)` | `/(drawer)/(tabs)/` | `/(drawer)/(tabs)/explore` | `/(drawer)/(tabs)/explore copy` | `/(drawer)/explore` | `/(drawer)/explore copy` | `/(routes)` | `/(routes)/(disciplinas)` | `/(routes)/(disciplinas)/estruturaDeDados` | `/(routes)/(disciplinas)/estruturaDeDados/` | `/(routes)/(disciplinas)/estruturaDeDados/exercicios` | `/(routes)/(disciplinas)/estruturaDeDados/tema-2` | `/(routes)/(disciplinas)/estruturaDeDados/tema-2/c` | `/(routes)/(disciplinas)/estruturaDeDados/tema-3` | `/(routes)/(disciplinas)/estruturaDeDados/tema-4` | `/(routes)/(disciplinas)/estruturaDeDados/tema-5` | `/(routes)/(disciplinas)/estruturaDeDados/tema-6` | `/(routes)/estruturaDeDados` | `/(routes)/estruturaDeDados/` | `/(routes)/estruturaDeDados/exercicios` | `/(routes)/estruturaDeDados/tema-2` | `/(routes)/estruturaDeDados/tema-2/c` | `/(routes)/estruturaDeDados/tema-3` | `/(routes)/estruturaDeDados/tema-4` | `/(routes)/estruturaDeDados/tema-5` | `/(routes)/estruturaDeDados/tema-6` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)/explore copy` | `/_sitemap` | `/estruturaDeDados` | `/estruturaDeDados/` | `/estruturaDeDados/exercicios` | `/estruturaDeDados/tema-2` | `/estruturaDeDados/tema-2/c` | `/estruturaDeDados/tema-3` | `/estruturaDeDados/tema-4` | `/estruturaDeDados/tema-5` | `/estruturaDeDados/tema-6` | `/explore` | `/explore copy`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
