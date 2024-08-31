# MERN TikTok Clone 


This is a full-stack TikTok clone built using the MERN stack (MongoDB, Express, React, Node.js).

## Features
- User authentication
- Video uploading and playback
- Commenting and likes
- User profiles
- Responsive design
- Handel DataBase
-Deal with fire base
-deal with logique

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TUNISIA-user/MERN-TIK-TOK-.git
   cd MERN-TIK-TOK-

### Step 3: Add, Commit, and Push the `README.md`
Once you’ve created and saved your `README.md` file:

1. **Add the file to staging:**
   ```bash
   git add README.md
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git


   ##litle of sql

   -- Create the comments table
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,    -- Unique identifier for each comment
    text VARCHAR(255),        -- Comment text
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Auto-generated creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Auto-generated update timestamp
);

-- Create the tiktokVideos table
CREATE TABLE tiktokVideos (
    id SERIAL PRIMARY KEY,     -- Unique identifier for each video
    url VARCHAR(255),          -- URL of the TikTok video
    channel VARCHAR(255),      -- Channel name
    description VARCHAR(255),  -- Video description (desc is a reserved word, so 'description' is used)
    song VARCHAR(255),         -- Song used in the video
    like1 INT,                 -- Number of likes (renamed to 'like1' to avoid SQL keyword conflict)
    message INT,               -- Number of messages
    share INT,                 -- Number of shares
    img1 VARCHAR(255),         -- Image URL (or any image data)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Auto-generated creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Auto-generated update timestamp
    comments JSON              -- Stores comments as JSON data (or a relation could be used instead)
);

-- Alternatively, create a relation between tiktokVideos and comments
CREATE TABLE video_comments (
    video_id INT REFERENCES tiktokVideos(id),  -- Foreign key to tiktokVideos
    comment_id INT REFERENCES comments(id)     -- Foreign key to comments
);


 

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠒⠋⠉⠭⠓⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⡋⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠶⠛⠋⠁⠀⠀⠀⠁⠹⠝⠛⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢨⠛⢦⣄⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠲⣌⠙⢦⣰⠿⠋⢀⣀⡠⠴⠶⠒⠚⣫⣽⣯⣉⡛⠒⠲⠶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣶⢻⣶⠚⠋⠁⠀⢀⣠⢤⣾⡿⠟⠛⠻⢿⣤⣀⣀⠀⠀⠉⠓⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣾⣧⠀⠚⠉⠉⠁⡿⠋⠀⠀⠀⠀⠈⠀⠀⠉⠛⠲⣤⢀⠀⢀⣽⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠒⠲⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠽⡇⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⠿⠻⢿⣿⣗⣆⠀⠀⠀⠀⠀⠀
⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⢀⣠⣤⣂⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⠈⠳⡄⠀⠀⠀⠀
⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⢄⡀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⢠⣿⠟⠉⠀⠈⠓⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠀⠀⠙⣆⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢦⡀⠙⢦⡀⠀⠀⠀⠀⣼⠁⠀⠀⡾⠁⠀⣠⣀⡀⠀⠈⣧⠀⠀⠀⠀⣠⡴⠖⠦⣤⡀⠀⠀⠀⠀⠀⠘⣧⠀⠀
⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠙⢦⡀⢀⡴⠃⠀⠀⢰⠃⢠⡞⠙⣿⣿⡆⠀⠸⡆⠀⠀⣼⠃⣅⣀⣀⠀⠉⢳⡄⠀⠀⠀⠀⠸⣆⠀
⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠶⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⠀⢻⡉⠐⠓⠒⠤⢼⣀⢸⣿⣶⣿⣿⣿⠀⢀⡇⠀⠀⡇⣾⠛⢻⣿⣧⠀⠀⢹⡀⠀⠀⠀⠀⠹⡀
⠘⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠲⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⠘⡇⠀⠀⠀⠀⠀⠈⠛⢿⣿⣬⣿⠃⠀⣼⠁⠀⠀⣷⣿⣷⣿⣿⣿⠀⠀⠀⣷⠀⠀⠀⠀⠀⡇
⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⣠⠤⣤⣀⡀⠀⠀⠀⠻⡉⠁⢀⡴⠁⠀⠀⠀⠘⣿⣿⣇⣿⡟⠀⠀⢂⡟⠀⠀⠀⠀⠀⠁
⠀⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⡈⠻⣦⠀⠀⠀⠀⠀⠀⣠⠟⠁⠀⠀⠀⢻⡙⠂⠀⠀⠀⢹⠔⠋⠀⠀⠀⠀⠀⠀⠙⢎⡉⠁⢀⣠⠤⠾⠦⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⢦⡶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢆⠈⢧⣀⣀⣠⡤⠞⠁⠀⠀⠀⠀⠀⠀⢻⣄⠄⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡀⢸⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⣀⣤⣤⣀⠀⠀⠀⠀⠀⡀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣳⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠽⣿⣆⠈⠙⠲⠦⣄⣀⣀⣀⠀⠀⠀⠀⢀⣀⣈⡵⠞⠁⠈⠁⠀⠀⠀⢀⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠓⠲⠤⠤⠤⠴⠖⠺⣏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢿⣿⣷⣄⠀⠀⠀⠀⠀⠉⠉⠉⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⡟⠻⢿⣷⣶⣤⣄⣀⣀⣤⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠻⠿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡽⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⣘⣦⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⠿⠿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠦⠖⠒⠀⠀⠀⠀⠀⠀⠀⣠⡴⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⠤⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠷⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀ 
