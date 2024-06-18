document.addEventListener('DOMContentLoaded', function () {
    const button_4000 = document.querySelectorAll('.button_4000');
    const button_3000 = document.querySelectorAll('.button_3000');
    const button_2000 = document.querySelectorAll('.button_2000');
    const button_1000 = document.querySelectorAll('.button_1000');

    const Cbutton_4000 = document.querySelectorAll('.Cbutton_4000');
    const Cbutton_3000 = document.querySelectorAll('.Cbutton_3000');
    const Cbutton_2000 = document.querySelectorAll('.Cbutton_2000');
    const Cbutton_1000 = document.querySelectorAll('.Cbutton_1000');

    const Sbutton_4000 = document.querySelectorAll('.Sbutton_4000');
    const Sbutton_3000 = document.querySelectorAll('.Sbutton_3000');
    const Sbutton_2000 = document.querySelectorAll('.Sbutton_2000');
    const Sbutton_1000 = document.querySelectorAll('.Sbutton_1000');

    const Rbutton_4000 = document.querySelectorAll('.Rbutton_4000');
    const Rbutton_3000 = document.querySelectorAll('.Rbutton_3000');
    const Rbutton_2000 = document.querySelectorAll('.Rbutton_2000');
    const Rbutton_1000 = document.querySelectorAll('.Rbutton_1000');

    const Gbutton_4000 = document.querySelectorAll('.Gbutton_4000');
    const Gbutton_3000 = document.querySelectorAll('.Gbutton_3000');
    const Gbutton_2000 = document.querySelectorAll('.Gbutton_2000');
    const Gbutton_1000 = document.querySelectorAll('.Gbutton_1000');

    const Obutton_4000 = document.querySelectorAll('.Obutton_4000');
    const Obutton_3000 = document.querySelectorAll('.Obutton_3000');
    const Obutton_2000 = document.querySelectorAll('.Obutton_2000');
    const Obutton_1000 = document.querySelectorAll('.Obutton_1000');

//this is the database container 7 part
    const Dbutton_4000 = document.querySelectorAll('.Dbutton_4000'); 
    const Dbutton_3000 = document.querySelectorAll('.Dbutton_3000');
    const Dbutton_2000 = document.querySelectorAll('.Dbutton_2000');
    const Dbutton_1000 = document.querySelectorAll('.Dbutton_1000');

    const level_3000_AIcontainer = document.querySelectorAll('.level_3000_AIcontainer');
    const level_2000_AIcontainer = document.querySelectorAll('.level_2000_AIcontainer');
    const level_1000_AIcontainer = document.querySelectorAll('.level_1000_AIcontainer');
    const level_basic_1000_AIcontainer = document.querySelectorAll('.level_basic_1000_AIcontainer');

    const level_3000_CNcontainer = document.querySelectorAll('.level_3000_CNcontainer');
    const level_2000_CNcontainer = document.querySelectorAll('.level_2000_CNcontainer');
    const level_1000_CNcontainer = document.querySelectorAll('.level_1000_CNcontainer');
    const level_basic_1000_CNcontainer = document.querySelectorAll('.level_basic_1000_CNcontainer');

    const level_3000_SDcontainer = document.querySelectorAll('.level_3000_SDcontainer');
    const level_2000_SDcontainer = document.querySelectorAll('.level_2000_SDcontainer');
    const level_1000_SDcontainer = document.querySelectorAll('.level_1000_SDcontainer');
    const level_basic_1000_SDcontainer = document.querySelectorAll('.level_basic_1000_SDcontainer');

    const level_3000_Rcontainer = document.querySelectorAll('.level_3000_Rcontainer');
    const level_2000_Rcontainer = document.querySelectorAll('.level_2000_Rcontainer');
    const level_1000_Rcontainer = document.querySelectorAll('.level_1000_Rcontainer');
    const level_basic_1000_Rcontainer = document.querySelectorAll('.level_basic_1000_Rcontainer');

    const level_3000_Gcontainer = document.querySelectorAll('.level_3000_Gcontainer');
    const level_2000_Gcontainer = document.querySelectorAll('.level_2000_Gcontainer');
    const level_1000_Gcontainer = document.querySelectorAll('.level_1000_Gcontainer');
    const level_basic_1000_Gcontainer = document.querySelectorAll('.level_basic_1000_Gcontainer');

    const level_3000_Ocontainer = document.querySelectorAll('.level_3000_Ocontainer');
    const level_2000_Ocontainer = document.querySelectorAll('.level_2000_Ocontainer');
    const level_1000_Ocontainer = document.querySelectorAll('.level_1000_Ocontainer');
    const level_basic_1000_Ocontainer = document.querySelectorAll('.level_basic_1000_Ocontainer');

    ///DB LEVEL CONTAINERS
    const level_3000_Dcontainer = document.querySelectorAll('.level_3000_Dcontainer');
    const level_2000_Dcontainer = document.querySelectorAll('.level_2000_Dcontainer');
    const level_1000_Dcontainer = document.querySelectorAll('.level_1000_Dcontainer');
    const level_basic_1000_Dcontainer = document.querySelectorAll('.level_basic_1000_Dcontainer');

    // Initially hide all containers except the first one (level_4000_container)
    level_3000_AIcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_AIcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_AIcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_AIcontainer.forEach(container => {
        container.style.display = "none";
    });

//CN CONTAINER LEVELS
    level_3000_CNcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_CNcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_CNcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_CNcontainer.forEach(container => {
        container.style.display = "none";
    });
//SD CONTAINER LEVELS
    level_3000_SDcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_SDcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_SDcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_SDcontainer.forEach(container => {
        container.style.display = "none";
    });

//R CONTAINER LEVELS
    level_3000_Rcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_Rcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_Rcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_Rcontainer.forEach(container => {
        container.style.display = "none";
    });

//G CONTAINER LEVELS
    level_3000_Gcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_Gcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_Gcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_Gcontainer.forEach(container => {
        container.style.display = "none";
    });

//O CONTAINER LEVELS
    level_3000_Ocontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_Ocontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_Ocontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_Ocontainer.forEach(container => {
        container.style.display = "none";
    });

//D CONTAINER LEVELS
    level_3000_Dcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_2000_Dcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_1000_Dcontainer.forEach(container => {
        container.style.display = "none";
    });
    level_basic_1000_Dcontainer.forEach(container => {
        container.style.display = "none";
    });



////AI BUTTONS  
    button_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_AIcontainer, button);
        });
    });
  
    button_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_AIcontainer, button);
        });
    });
  
    button_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_AIcontainer, button);
        });
    });
  
    button_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_AIcontainer, button);
        });
    });

////CN Buttons 
    Cbutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_CNcontainer, button);
        });
    });

    Cbutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_CNcontainer, button);
        });
    });
  
    Cbutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_CNcontainer, button);
        });
    });
  
    Cbutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_CNcontainer, button);
        });
    });

////SD Buttons 
    Sbutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_SDcontainer, button);
        });
    });

    Sbutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_SDcontainer, button);
        });
    });
  
    Sbutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_SDcontainer, button);
        });
    });
  
    Sbutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_SDcontainer, button);
        });
    });

////R Buttons 
    Rbutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_Rcontainer, button);
        });
    });

    Rbutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_Rcontainer, button);
        });
    });
  
    Rbutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_Rcontainer, button);
        });
    });
  
    Rbutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_Rcontainer, button);
        });
    });

////G Buttons 
    Gbutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_Gcontainer, button);
        });
    });

    Gbutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_Gcontainer, button);
        });
    });
  
    Gbutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_Gcontainer, button);
        });
    });
  
    Gbutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_Gcontainer, button);
        });
    });

////O Buttons 
    Obutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_Ocontainer, button);
        });
    });

    Obutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_Ocontainer, button);
        });
    });
  
    Obutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_Ocontainer, button);
        });
    });
  
    Obutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_Ocontainer, button);
        });
    });

////D Buttons 
    Dbutton_4000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_3000_Ocontainer, button);
        });
    });

    Dbutton_3000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_2000_Dcontainer, button);
        });
    });
  
    Dbutton_2000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_1000_Dcontainer, button);
        });
    });
  
    Dbutton_1000.forEach(button => {
        button.addEventListener("click", event => {
            toggleVisibility(level_basic_1000_Dcontainer, button);
        });
    });

    function toggleVisibility(containers, button) {
        // Toggle visibility of the clicked containers
        containers.forEach(container => {
            if (container.style.display === "none") {
                container.style.display = "block";
                button.textContent = "Hide PreReqs";
            } else {
                container.style.display = "none";
                button.textContent = "Show PreReqs";
            }
        });
    }
});
