import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictaktoe';
  currentTurn = 'X'
  cellsValue :string[] = Array(9).fill('');
  isFinised = false;

  inputTick(index :number){
    console.log("input tick called : " + index);
    this.cellsValue[index] = this.currentTurn;
    this.isFinised = this.checkWinner();
    if(this.isFinised){
      return;
    }
    this.currentTurn = this.currentTurn == 'X'?"O":"X"
  }


  checkWinner():boolean{
    var cellsBackup = this.cellsValue
    if(cellsBackup[1]!="" && cellsBackup[1] == cellsBackup[2] && cellsBackup[2] == cellsBackup[3]){
      this.resetCellsApartFromWinningCells(1,2,3);
      return true;
    }
    if(cellsBackup[1]!="" && cellsBackup[1] == cellsBackup[4] && cellsBackup[4] == cellsBackup[7]){
      this.resetCellsApartFromWinningCells(1,4,7);
      return true;
    }
    if(cellsBackup[3]!="" && cellsBackup[3] == cellsBackup[6] && cellsBackup[6] == cellsBackup[9]){
      this.resetCellsApartFromWinningCells(3,6,9);
      return true;
    }
    if(cellsBackup[7]!="" && cellsBackup[7] == cellsBackup[8] && cellsBackup[8] == cellsBackup[9]){
      this.resetCellsApartFromWinningCells(7,8,9);
      return true;
    }
    if(cellsBackup[4]!="" && cellsBackup[4] == cellsBackup[5] && cellsBackup[5] == cellsBackup[6]){
      this.resetCellsApartFromWinningCells(4,5,6);
      return true;
    }
    if(cellsBackup[1]!="" && cellsBackup[1] == cellsBackup[5] && cellsBackup[5] == cellsBackup[9]){
      this.resetCellsApartFromWinningCells(1,5,9);
      return true;
    }
    if(cellsBackup[3]!="" && cellsBackup[3] == cellsBackup[5] && cellsBackup[5] == cellsBackup[7]){
      this.resetCellsApartFromWinningCells(3,5,7);
      return true;
    }
    if(cellsBackup[2]!="" && cellsBackup[2] == cellsBackup[5] && cellsBackup[5] == cellsBackup[8]){
      this.resetCellsApartFromWinningCells(2,5,8);
      return true;
    }
    return false;
  }


  resetCellsApartFromWinningCells(cell1:number,cell2:number,cell3:number){
    for(let i =1; i <=9;i++){
      if(i!=cell1 && i!=cell2 && i!=cell3){
        this.cellsValue[i]=""
      }
    }
  }

  resetGame(){
    this.cellsValue = Array(9).fill("")
    this.isFinised = false;
    this.currentTurn = "X"
  }
}
