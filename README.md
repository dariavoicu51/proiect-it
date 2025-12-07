# 🥩🔥 GrillMaster — Full-Stack Barbecue App  

---

## Descriere generală

**GrillMaster** este o aplicație full-stack în care utilizatorii își pot crea cont, se pot autentifica și pot posta grătare (grills) cu:

- Nume  
- Descriere  
- Poză uploadată din calculator

Fiecare utilizator are pagina sa personală unde vede toate grătarele adăugate în secțiunea **My Grills**.

---

## Cum rulezi proiectul local

###  1.Clonarea repository-ului
```bash
git clone https://github.com/dariavoicu51/proiect-it
```

### 2.Backend
```bash
cd Backend
npm install
node index.js
```


### 3. Frontend
```bash
cd Frontend
npm install
npm start
```

 ### Funcționalități implementate:
### 🔐 Autentificare
Aici am reușit să implementez partea de login si register, partea de login are și opțiunea de uitat parola prin intermendiul căreia se poate schimba, după care retrimite la SING IN.
De asemenea, înregistrarea datelor este trimisă către BACKEND.


### 🍖 Gestionare Grătare (Grills)
Odată ce logarea este realizată, pagina se mută pe alte opțiuni -> profil, best grills și logout. Partea de profil conține bineînțeles datele userului și de asemenea lista grătarelor pe care le deține. În plus, există și opțiunea de a își publica grătarele, cu nume, descriere și poză.Cu toate acestea, nu am mai apucat să fac legătura datelor cu BACKEND UL pentru a le pune în baza de date a utilizatorului și a face automat update in secțiunea MY GRILLS.
De asemenea, partea de BEST GRILLS nu a fost concepută în așa fel încât să afișeze cele mai top grătare.:(
### 🖼 Upload Imagini
Folosind Multer

Salvare locală

Afișare în UI

### ⭐ Bonusuri realizate

Upload imagini

Galerie personală

Persistență completă

Design custom

### 📘 Ce am învățat
A fost prima dată când am fost pusă în situația să concep un astfel de proiect și am învățat cum să mă mulez pe cerințe și să încerc să fac ceva cât mai interesant. De asemenea am învătat că nu le pot face chiar pe toate și că trebuia să îmi fi împărțit timpul altfel încât să pot termina cu adevărat proiectul acesta. :)))))))

### 👤 Autor

Daria Voicu
