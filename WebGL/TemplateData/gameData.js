// 使用 fetch 加载 JSON 数据
let gameMap = new Map();

// 加载游戏数据
async function loadGameData(factoryId) {
    try {
        const response = await fetch(`./TemplateData/gameFactory${factoryId}Json.json`, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`game data load fail : ${response.status} ${response.statusText}`);
        }

        const gameData = await response.json();

        gameData.forEach(game => {
            gameMap.set(game.game_id, game);
        });

        console.log(`game data load success : ${gameData.length} length`);
        return true;
    } catch (error) {
        console.error('game data load fail message :', error);
        return false;
    }
}

// 初始化加载
//loadGameData().then(success => {
//    if (success) {
//        console.log('game data json init over');
//    } else {
//        console.error('game data init fail，please check the json file');
//    }
//});

/**
 * 根据 game_id 获取游戏信息
 * @param {string} gameId - 游戏ID
 * @returns {Object|null} 游戏信息对象，未找到时返回null
 */
function getGameInfo(gameId) {
    return gameMap.get(gameId) || null;
}

window.gameDataReady = loadGameData;
window.getGameInfo = getGameInfo;