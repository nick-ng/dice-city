# Functions

Functions that advance the game state.

## Game Flowchart

[mermaidjs](https://mermaid.live/view#pako:eNp9k8tugzAQRX9l5G2TH2DRRUKUXVUlKF1AFi6eNFaNXRm7aYT49xpjzKNRWaDrM3cewkNDSsWQJOQi1K28Um0gSwsJ7jFWy6NxJM-cAi_PsF4_Q3nF8jPTlHdxw5XMtx0BjyCwc1_lj9dX0EqIlJeYH5yATgX7EOhdWCvxjQfKuMrUDXVz6Al4BJ61IXHpDRXGTl7Oej1KGSCyPDZDFjMezofsn-FjMJ6n4Y2wuNeIMnbrCDyBh_NBo3dawH1Vxm0V08N5nhngNC87DXc3ZGanxdUtnbO5bc0l1vUWpdE4Dh8w9Hwx_yzHV3u3XLB8072D15Nxy964bPrlcqqdrJQ7ehdKtqcV5jvJoBPnBx6JP-ZV0Dvq_MVJ6HVwjkHvjVtfyEKSFalQV5Qz94c0nb8g5ooVFiRxkuGFWmEKUsjWWe0XowZ3jBulSXKhosYVodao412WJDHa4mBKOf3QtOph-wuGKTqI)

```
flowchart TD
    turnStart[Turn Start] --> checkTrainStation[Check Train Station]
    checkTrainStation --> rollDice[Roll Dice]
    rollDice --> resolveRadioTower{Resolve Radio Tower}
    resolveRadioTower --> rerollDice[Reroll Dice]
    resolveRadioTower -->resolveRed[Resolve Red]
    rerollDice --> resolveRed
    rollDice --> resolveRed
    resolveRed --> resolveBlueGreen[Resolve Blue + Green]
    resolveBlueGreen --> resolveStadium[Resolve Stadium]
    resolveStadium --> resolveTVStation[Resolve TV Station]
    resolveTVStation --> resolveBusinessCentre[Resolve Business Centre]
    resolveBusinessCentre --> build[Build]
    build --> checkWin{Check Win}
    checkWin --> endGame[End Game]
    checkWin --> nextPlayer[Next Player]
    nextPlayer --> turnStart

```
