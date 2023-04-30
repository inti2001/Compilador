# Compilador
Seminario de Traductores de Lenguajes 2
Inti Martínez Flores 220790938

Analizador Semantico con ejemplo correcto: 
int main(int x, float y)
{
  int a,b; 
  if(a == 20)
  { 
    b = a+x;
  }
  else
  {
    b = a-x;
  }
}

![image](https://user-images.githubusercontent.com/58715706/235333282-b1f54d76-5478-4966-ab82-c06d5bf1ea1d.png)

Analizador Semantico con ejemplo incorrecto:
int main(float x, float y)
{
  int a,b; 
  if(a == 20)
  {
    b = a+x;
  }
  else
  {
    b = a-x;
  }
}

![image](https://user-images.githubusercontent.com/58715706/235333418-ee6baffb-e5e5-4044-ab75-6e5c57505b4d.png)

Analizador Semantico con ejemplo incorrecto:
int main(float x, float y)
{
  int a,b; 
  if(a == 20)
  {
    b = a+holaa;
  }
  else
  {
    b = a;
  }
}

![image](https://user-images.githubusercontent.com/58715706/235333472-fa411e3b-1ecd-4f30-a2d6-ef71ae1896fc.png)

int main(float x, float y, float y)
{
  int a,b,b; 
  if(a == 20)
  {
    b = a;
  }
  else
  {
    b = a;
  }
}

![image](https://user-images.githubusercontent.com/58715706/235333522-d1b56561-762e-4e3b-bf36-73ecac29fc1c.png)


