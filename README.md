# DialogAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

After downloading the folder. Enter it and use `npm install package.json` command to install the dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Connecting with backend

The backend repo is right here https://github.com/juliadabrowka/dialogbox_python_backend

Download the code.

To connect to backend at first you need to have Python downloaded on your device. Link for that https://www.python.org/downloads/release/python-3100/

Then create a virtual environment for the project https://docs.python.org/3/tutorial/venv.html It is not obligatory, you can skip this step and install everything globally on you device. Up to you.

When you enter to the evironment enter the backend repo folder and use the command `pip install -r requirements.txt`

It should install all the dependencies for you.

Then enter to the project folder by `cd collage` and run the command `python manage.py runserver`

The backend should be fired properly.

## About the project

It's a prototype of website where you can upload images (on backend -> Django), give them name, author and serie.

The main page component shows you all the images that are uploaded on the backend.

![image](https://user-images.githubusercontent.com/76727970/139287624-c7aa0d9e-2a97-48d6-ae46-87d1bd6d9d3b.png)

When you hover one you can see title, author, number of image and serie.

![image](https://user-images.githubusercontent.com/76727970/139288031-add0d231-45b8-4a9c-a463-88bdaa27a261.png)

On a serie page component you can see an exact serie of your choice with tokens which belong to that serie. Images, titles and descriptions of each serie are filtered by the slug given by API.

![image](https://user-images.githubusercontent.com/76727970/139288160-aa092b88-4dcd-49f7-b584-446fa4f4dea5.png)

Menu bar also gets data from API. The 'Collection' section open when you hover over it and shows you all the series which are available on backend.

![image](https://user-images.githubusercontent.com/76727970/139288616-3a51bd00-ae90-4210-b9a9-9c808a3b1c3a.png)

When you hover over Collection at menu bar and click Active there will be shown list of all available series with their cover. You can enter each serie by button 'View gallery'

![image](https://user-images.githubusercontent.com/76727970/139294734-1345d31f-fbe8-4c52-8c4a-f8727954ed4c.png)

The images are property of Dialogbox and I don't get any material interest of using it.
See their SM here : https://www.instagram.com/dialogbox_nft/ :)))
