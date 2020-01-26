
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Task 0

function checkArray(test){
	var array=test;
    var counter=0;
    
	for(i=0;i<array.length;i++){
		for(j=0;j<2;j++){
			if(array[i][j]%2==0){
				counter++;
			}else{
				continue;
			}
		}
		if(counter==2){
			console.log(true+",");
			counter=0;
		}else{
			console.log(false+",");
			counter=0;
		}
		
	}
	
}

console.log(checkArray([
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
] 
));

//Task 1

//1.
console.log(task1Array[3][2]);
//2.
console.log(task1Array[2].length);
//3.
console.log(task1Array[4][2]);

//Task 2

//1.
for(i=0;i<task2Array[1].length;i++){
	console.log(task2Array[1][i]);
}
//2.
for(i=0;i<task2Array.length;i++){
	console.log(task2Array[i].length);
}
//3.
for(i=0;i<task2Array.length;i++){
	for(j=0;j<task2Array[i].length;j++){
		console.log(task2Array[i][j]);
	}
}

//Task 3

function print2DArray(input){
	var array=input;
	for(i=0;i<array.length;i++){
		for(j=0;j<array[i].length;j++){
			console.log(array[i][j]);
			
		}
	}
}

print2DArray(task1Array);

//Task 4

console.log(print2DArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));

//Task 5

function create2DArray(rows,columns){
    var tab=[]
 for(i=0;i<rows;i++){
    tab[i]=[];
    }
var licznik=1;
for(i=0;i<rows;i++){
    for(j=0;j<columns;j++){
      tab[i][j]=licznik;
      licznik++;
    }
}
return tab;
}

create2DArray(6,8);