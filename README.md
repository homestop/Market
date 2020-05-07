# Market
### About
Market is demo version of functionality e-commerce site.  
It was created for educational purposes.  

## Building
Dependencies:
 * **python3**
 * **Angular cli**
 
At first we must create python environment:   
```
python -m venv venv
```  
Next we need step in python environment:
```
source venv/bin/activate
```
Then we must install django and other requirements described in the .txt file:
```
pip install -r requirements.txt
```
Next we must migrate the data base and seed it:
```
python manage.py migrate
python manage.py seed
```
If you want login login in django admin, you must create admin account:
```
python manage.py createsuperuser
```
Start server:
```
python manage.py runserver
```  
Then we must step in WebUI folder. In the folder we install node js packages, and start angular:
```
cd WebUI

npm install
ng serve
```