const sales = 
[
    {
        action: "After months of tries, the young men have finally reserved a boat.",
        option1: {
            text: "Tell him you're not interested",
            nextpoint: 1,
        },
        option2:  {
            text: "Hear him out",
            nextpoint: 2,
        },
    },
    {
        action: "He has a rebuttal for that! 'Sir, a classy man like you needs this car!'",
        option1: {
            text: "We're not even at a dealership!",
            nextpoint: 0,
        },
        option2: {
            text: "Ooo a new car",
            nextpoint: 2,
        }
    },
    {
        action: "Ssssoooooooo, what kind of TV service do you have?",
        option1: {
            text: "Tell him your landlord pays for it",
            nextpoint: 1,
        },
        option2: {
            text: "Tell him you don't watch much TV",
            nextpoint: 0,
        }
    }
];

function displayText() 
{
    var text = document.getElementById("textField");
    text.style.display = "block";
}

function applyPoint(next) {
    const point = sales[next];
    $('#action-text').text(point.action);
    $('#option1').text(point.option1.text);
    $('#option2').text(point.option2.text);
    $('#option1').attr('data-nextpoint', point.option1.nextpoint);
    $('#option2').attr('data-nextpoint', point.option2.nextpoint);
}

$('#option1').click(function(e) {
    applyPoint($(this).attr('data-nextpoint'));
});

$('#option2').click(function(e) {
    applyPoint($(this).attr('data-nextpoint'));
});

applyPoint(0);