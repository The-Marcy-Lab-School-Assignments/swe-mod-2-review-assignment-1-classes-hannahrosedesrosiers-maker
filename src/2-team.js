// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) { 
        this.name = name
        this.position = position
        this.jerseyNumber = jerseyNumber
    }


}

class Team {
    #starters = []
    #bench = []
    constructor(name) { 
        this.name = name
        Player.allPlayer.push(this)
    }

    get starters() { 
        return this.#starters
    }

    get bench() { 
        return this.#bench
    }
    addBenchPlayer(player) { 
        this.#bench.push(player)
    }
    
    getPlayerCount() { 
        return this.#bench.length + this.#starters.length
    }

    moveToBench(name) { 
        let currentPlayer = this.#starters.find((player) => player.name === name)
        if (!currentPlayer) { 
            return false
        }
        let i = this.#starters.indexOf(currentPlayer)
        this.#starters.splice(i, 1)
        this.#bench.push(currentPlayer)
    }

     moveToStarter(player) { 
         let foundIndex = this.addBenchPlayer.findIndex((player) => player.name === this.name)
         if (findIndex === -1) { 
             return false
         }
         let found = this.#bench.splice()




}

module.exports = { Player, Team };

