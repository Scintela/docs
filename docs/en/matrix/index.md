# Model × Hardware Matrix

The biggest pain of edge AI is fragmentation: the same model means a completely different toolchain and completely different performance on an RK3588, a Jetson, an ESP32, or a phone NPU. This matrix answers, with community-measured data:

> **Which model, quantized how, on which board, under what power budget, performs how?**

## Matrix

| Hardware | Model | Quant | Runtime | Metric | Value | Power | Status | Contributor |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TBD | | | | | | | | |

::: tip The first row is waiting for you
The data repository `Scintela/matrix` is under preparation. See the [contributing guide](https://github.com/Scintela/.github/blob/main/CONTRIBUTING.md) — record an environment snapshot, commands, and raw output under `bench/`, then add your row. Merged rows are permanently credited.
:::

## Field Notes

- **Quant**: int8 / int4 / fp16 / full precision
- **Metric / Value**: one metric per row — single-frame latency (ms), throughput (fps / tok/s), TTFT (ms), etc.
- **Status**: "Pending" → "Verified ✓" (upgraded once independently reproduced)
- **Power**: whole-board watts, note whether peripherals are included

## Get Involved

- 📋 [Hardware Lightboard](/en/matrix/lightboard/) — claim an untested board
- 🤝 [Contributing guide](https://github.com/Scintela/.github/blob/main/CONTRIBUTING.md)
- 📮 Scintela@outlook.com
