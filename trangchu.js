

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (filter != '' && filter != ' ' && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("up").style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
function outClick() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (filter != '' && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("up").style.display = "none";
        } else {
            li[i].style.display = "none";
        }
    }
}



let dataMobile = [
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687757921048_11-pro-max-chung.png",
        name: "Iphone 11 Pro",
        price: "28.000.000 ₫",
        priceSale: "30.490.000 ₫",
        id: "product-1"
    },
    {
        a: "./ipxs.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/1/637002351614380313_636749593270587915_iphoneXS-1o.png",
        name: "Iphone XS",
        price: "25.990.000 ₫",
        priceSale: "30.990.000 ₫",
        id: "product-2"
    },
    {
        a: "./ip11.html",
        img: "data:image/png;base64,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",
        name: "Iphone 8 Plus",
        price: "13.990.000 ₫",
        priceSale: "15.490.000 ₫",
        id: "product-3"
    },
    {
        a: "./ip11.html",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAyVBMVEVHcEyOFAAXEy0HBhEAAQUAAQUAAQbKZAAAAAPHGADeGwBnQkamFABEJTEJBQ3jdQB7NwCuVwAQCAcQCxkAAQYBAQbqHwAAAQaZTAABAgYLBQpmKAAAAQWHQwAIBAoBAgcBAgVbFwAAAQcAAyUGAwcACEQDAgbpNgEBAQoAiuo0EwEAAQg4FAAAO6sAduoLBAZbHQIAOJ0AGmqIKgkAJXgAG2EAD0cAQb8ASssALJIAS6sAQ7d0IAEGBAgAbtAAK3sAAAAAV+EARNKbDoU+AAAAQHRSTlMAVxYj3NbhPPs8MQdKECwvZEdGHMSnKstQoTV2vFo+snlf0f6V/Iof6uiC8279/VhNcfcil77k/S/40U87brnk3dmBLAAAEC5JREFUeJy9nA1folgUhw0FUdQURdNMRERZsfXdKbOkvv+H2nPuGxcExyZnj8zsz2zjmef87wFMzeWiMnL/a2XuDh4wqsoGq9ncJCqPX2zm802p8rVY9Xq1b5RSzaRQjss7uC0rS6jKXf1x7iyjmr8vFiavgTns2lL17e7kezUcLmrpIIPlcVOtGnDDmjpOGe5OyZ1qruYse6RqeMu/d62uZQmKvt1XfT/Qr68g0Dr94bkTwzAHyEAg4L8b5wh3KNS0agwWsPdavpbPw59ac2KNLdh7v9Vq4Z+Rpod/ULrfyZ9xmD3Y5RSqDbfpcbGBu5vNdANfuZ8iRr5ZJZjA9m51kQJFtGDTNPtPOPSw09GaCY4e2FCUKal2uw02qtPNPanifXEOLqgrVNSzAcO2ul2LgKj6RPsTHVATzUroWCjGdFptH53FstRulxyipnh0nIdG8d4Z5PMA0OyZvVrTqI7HFuSSdgZAdLv7hxihOtF7MY72MgccR2ek6+q8UnagSdP741wL9Y7zUJzn84pRzXcD3R/3mjWri8vDUoPAVzstNXz/Ux2hPiyMYzqOGxwdyyAM4IfPK84UfNzPMdd6wXlymqCj2Q3hXjjuLWzgmHSBEb5ZHfna+3k6giDaV6hnp8ey1JiPJXBMN5MwcOFndx1HAY5jC+/6wWxuIscg0PFRzZx0rb41seFBF40E/cn5v1MrwL4DjVQBNj+Doz8J5LVrLJWqMj3auuvv/aA/d3DpHAu6q8FUGM8HTUjFAna8d31tAfns2+M+UO19H3Zojc9/fkB2HI2LLB+joS6vGKNmQDzKY/j/NT/ozmG13E8bsCsN7s7eTeQY+PCP14DDQo4uPOjDowUt7J7H9OplrA5DeYQYTcNQpmVHgzb4hbmTx5g25gHe7cznJsTUqHVDH+xMCEff6sP3QqVzXF1JjuUGF+py3vL9zsy5cyCl9/fOTNW0/rw+J5M2b46h0ePFoDue2C2739GwK35B71q343DaOL/KzuNsNn8s3T2SAdZ4xLv1xtzECV+tLd7f3xe1mgUcODfUQkHzRyPI/I04DMoBY7RdubuDMQYcUzJJH56eGsUicuBhR+kN4HBNOfC4MlJhfIzCW/uAA0ubwJSZj2KRDHXBUSVHPeAY23h0I9VRf8ChZ/SFF/MBDPToIjhQCvHRIkKQ40c+9LS+CI4y7wtFKbJ8IAT1ARwUo3NTjlyUj7bUl2KRGRE+FLxxH62b+0jjmAobIh8K0aGQfPwVH9J6aZdh4z4IRcyHUk36GP0kp9k+yngri5zGfFAdSiIf6k/mRwZHuRzzQSDkdcvzMZbyUbgdR9SXcjvuoxj5UPgNOQTFX/IR9SVaLxEHVJXO075oyw05jCgfZSkfRAWpWF8Yx9/3UY7m+rkPRZH7Qn3cbr0YVactLReWDxpSqHcpHzJH5ybzI7q6NHK1R7FecHvkxzlKMhxgXxRCAQddyQfUjzmGPBxQG6fM1gveSnd1lg+C0iBXnKIvA2sS+QCO4CYclKUp8oGFHHx+wPZgMh+kmqY9kXyMbsTBfbB8EBLqg/YFQDgHbYvE0bkhB0XhPsqSD75qKYdy7qNzax8G88HaUq5QDp4P2UeM48Y+ctSHaEtb5CPywW2cc6jBD+fYeyKnbTbEuA+uo/hkmuT0I8HR4fm4GUcul6ccPB/1x1g+FoNouUgcFEP9yfVLPKdGLg9zTMSjXHp8jPVlgvmQOMYRR2dU+OkcWySOL5k+GvPIR1NpDjgHXS5aaP35dSVyNKN4GISjLDicMw4jyimf68yHqv+QI3kexEJK5keCwxRtaQqODs/HT30kj/tspqdzGIwiOt52hI+s633X9TzPdb/PEc3TDB/NyAeFAIw0Dh0Q1ofDx8fH4eNwOHmZT4hk9AVskJvE0RAcTUKhkOO+WLYddZTg0ImI0wHrY7vdIg0hSUPJ7ovwwSBkH01kUaR8jOB0TA0SHNgMb306nXbbFdR2dzq9nk7pT5BdykfcB7BQDmajqUh9QR9qdHzRsSPe62kNGIfDavX29vLy8vYGJJ532n+vL2SLOBqRD4SAohw4PEY8H2KOQS726+fX9Zq4QAqst9Vu53mH03d8EBDRF6ojlo9mLKejOIfrg4rXg7cjGKgDT1gABLqzXm2v5iBNgWI+GiSloi9EB/dBV0uCw9t77voVbUChD/yVhfJCQPa7t9BNZjW9LyVOEvloyPmgJTioD026fgEMfb329uv93tsSDDx4VSEjq63r7lzPTazgNB/YlRLdGEeDxoNxNBkJWbeMQubQdR+n1nqN08Pbr4gN8sOVF9Dh6rvdHp/RRSl8Eaf5KLOmxHwARVFwJH2MEj5QR+h5MD9cb7d6aRrkF0nw/768bQHRd/EBisFA0n2U5HywjBIfgyRHK+KIjvvuHr17+/1+t/d2b5BRI0duwLHaoyT4pvXalZ76T/dRZm2R+9JoNOI+8twHxlSNcaw92IG32u1X+/0W1opBqwprdwWMux2u7NPa1X/rg5XMQfJRTfMxivnQkQP2019BS7AtCvn9nqKQGbLaee4WpMA3PRMjl3xwHXJfqI/quQ+6apM+XPd9u1O268MK1urqgx5lPt4gILiCgMbDkS8ak+KjzX3Af+qEAxHO+xL3oSJHN8qH677sYP//QP3777+fWF9fv54/YOHudisy0PbSuUCGD6aDcdCcNhoPko98wofMEa4hp/vq6YNgcJAvqF+/noEAZxtOWWiPnsrBfJREQCIfqIRwMArWlxZPx0jmwLOe1eqZYUgcqIR0ijrZZXAwH6VEThtyPqgL2JoxDhXmB8+Hjhy1g6QDOL4+v34hx9fz6+qNdGe3c0VjLvuoEB+cguaDdyXGoRIOMcdgSO1fnj8O//zDAkLjAW35BUKeXw8Ist3C0gmyfbSTPjhFg/cFX+yQl/uixjhgDXTc3cvhY304ywc25hlJgAPORjI4Mnw0Ih+iL1DIwXTE+wKDXd0pHx+e4PgkfaFGngnI6wnOTq72UT/zoXAK5OiCj1Hkg+dUDwPLe1sd3BMP6qfI6RcDwZOktfub9cKr8pjCQUKKG+XoMIzY7wn1Vsv7OLneR9SXr0/B8Ytg4Omr+CXzBR+VDB9N7mOAHEJH/PeVOoxNOJ6dYo2RO/OKoy46Hbroo4I+imd9yWdyiPNkPdyv1nj1dIjl9DNqDB4KXel37lk+KsSH3JeHZD44B6GIcRAhcLECx5DYZJc5XHzJQAZHaj4YBPzJ8EF1JDhCPw7y+clJftF4QFeC8Hc+KuzGfDzEfKRxnPsI7dPHmoL8y0ZqjCN+xfubfEBOixQBWVI4xGpBH1aMI7A9cu6F04yQfNLlixyvrx4eCy/7KHEfdI7xrsA2S3J0O3JfEs+PFXZ4YenhhcwHMULjSnS8eidPz+TIcQ66bCucA7MBW4yjxji4jjMOPVRtwuHRdcMOd1+sLfvY8xDX+GBdaVAOBsF9qGrUl+TzY/oIj6jkcvs1Ou7StlzkyMU5eD6ojAeJA187xjhGkY/z5+lGFl7DwHaIxsgvqmMXZnMYUV8oxyPL6QPdKAd9FVu+NrC5j0I6B4wzzQoQxBNjBGMKOtzd/gIH91G57KNGbxJHal/IOfCoTy6aCMY/rC+EI7zAgT7KrC8VhCE+OEXkg76+MsoH8eGfc+DWUV3dZWcAxAcdHuoljhzjqJQSPiKOpuSDc9C2nHGwPdh4GXliQj5ZW3ztEkfkgxX1weuJ+agxH/ZlH9zJGC8QDkABPvBoizN9pF/iED4qrDP1x6LEQX0QCoThHIULPnB3Plzkh3SCkHTgaVgh+X2pPng8UnwwDizTtiQfmX0JQw1ORjvu+kCHOoRjPwouckQ+KEk6BwcZ2JYlfGhZHAjib8cruKBcv0IBxtbyLz8fhM+vMw6ej2KRQxAORXotskk5ClRHej5CeiWtW121tcUnYWDFvqzOXw6Z4qNcojZKjOPch+CwCcdlH+yZBW3c7ezHb2+DfC31u87zUY50SByo4wKHlt0X7sRv2fiS2VaQ9ty2Xkj1weIhOJ7S+2KLvvyGg+8t87n+OMdFH0+UoxbjGLF0XMOhi79SfGX4oHXHckognp4kjh5slIPr+A2Hzgh0PRXlCh8UAzgiHz2yMY6rfIhnwtJfg/otH4KjJ/u4Kqds97pYPtf44BBw4xysCAej6H3XRxheeIVy2vzgEMLHE0kHWbdKnsWj10Mf9kjE45r1kl1p8+PMB4V44hwEokf6Youu3JQj4UPieIo4kIGQRPnQrpwf3/VxxzbaF4FRZxw1+oYP2pe/6oNSEI5GxCF8kLbcliNjvdylcdQlDiBZ3I4jZX6UyoIig4OTRD6um+vX+8Dzj1Lk4+6ij57wof1VH3e/6UtPzLGfc6TkA8/GkIL8xTjquNUTHAOz/1fzUeI6WF+oiqd6jGMg5+PmPkg+0McdNSI46kQJ4eAYg57Z7/+lfMh9kXzU6SY4kGIw6C04x83nRy4n+7iL+ahzHwOmg/vQbp8P5uNOFPPBMIADDvtUB8kp9aHdIh9nc53mNMbBKBjHACmgL6bwcXOOSz5oX5BjwEgWt8tphg9edc7BivdlMJBy+n/6YH2ZUA5Wf99HJeZDYIi+kDJvOD9+4wM4Gmd9GbC+/I/5cKgPDvIY8/G/57Rer4s59juOP3r7bZgxT1M4znyYEoc0T7/xRuR4XfRxN3uE02TRl5gPM6Mv5Frpe1uYfJ+WnNM68/EgKJ64D9NEDPObx7ngwrtNU963doz1ZV5qJHzQnpjUR//qnAb4PtoL795OcvSmGzE97urz5fQozY/JgkwxgDCJj9bVHPRXcYGa6eSMo1qV5+nRUJYip8Bh0gmGIMjRil1XZr9Omr8bOBhd62PZrB6lvjjVqsQxW5CG0M8PiDi4Dzvl/bek9BbX0Ek+cSpxxN6xvsxTDohp3YHjiyL5eJwRH0yHubATHCnvR2YcQpSa9X7k1kRXYhzHak+eHzX0wYM6m5vcB3JYnRgHzoB0jIijlcVhd7XY500cl8pGysfsWD068iAzBYa5GI/kfGh68J757mv+ZGU3qy+Tji1j5BRHUY58uQCHM91EjZnNFotFxDEctTrSdaUfjlsZe/HZA4V+xjcEQ30R4zCWlWpzGfkAIXkn8iF/1IU5tEedWEC0SeayVHFq+p2sx21bS3zUhDKvVafQC+ID9jzfVDeQj0fKMQEQTrJYjNXOKALxg7DfydhPGBR8GGRZGH43jOvAt57Mj1Vlczwuj8vl0pnPgEvZ9I7koz8Ww8n78B1ZSE3sAgFhZ+wwuYOM10FjXfi6rk9yCQ4EcWrkjZzkHdDObLbMK+y9v/neYgIcsGENh91OgbwkmKbE94PCKPPfnF1BoZWwQTgMWCJzZ3nEGpjObDKeic9DWcxn4/FkCAUww+HEhqCqvApgxO/jx5L00yvt67ZljYe11E+JMYzNcj4TNRlDiXt4B0gIC4CMu+RTUKAsCz8XBY45dhe+IbXSvjyeLPJpDBSEPWLQV44a9A/7i7z/MfUf8Kcl/aj/AKOWQmi0BU+yAAAAAElFTkSuQmCC",
        name: "Iphone 7",
        price: "7.490.000 ₫",
        priceSale: "8.490.000 ₫",
        id: "product-4"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/1/27/636526515750427366_1o-6splus-32.png",
        name: "Iphone 6",
        price: "6.490.000 ₫",
        priceSale: "7.490.000 ₫",
        id: "product-5"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/2/12/637170944168255808_ss-s20-plus-xanh-dd.png",
        name: "Samsung S20+",
        price: "25.590.000 ₫",
        priceSale: "28.490.000 ₫",
        id: "product-6"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/9/637009484555889036_SS-note-10-dd-1.png",
        name: "Samsung Note 10",
        price: "21.490.000 ₫",
        priceSale: "22.990.000 ₫",
        id: "product-7"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863616938548520_ss-galaxy-s10-plus-daidien.png",
        name: "Samsung S10+",
        price: "13.990.000 ₫",
        priceSale: "18.990.000 ₫",
        id: "product-8"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/12/637196199369044830_ss-a71-hong-dd.png",
        name: "Samsung A71",
        price: "9.290.000 ₫",
        priceSale: "10.490.000 ₫",
        id: "product-9"
    },
    {
        a: "./ip11.html",
        img: "https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/6/2/637267175905809175_SaS-A21s-den-1.png",
        name: "Samsung A21s",
        price: "4.390.000 ₫",
        priceSale: "4.690.000 ₫",
        id: "product-10"
    }
];
let dataLaptop = [
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/18/637096956683492064_MBP-16-touch-dd.png",
        name: "MacBook Pro 16",
        price: "69.990.000 ₫",
        priceSale: "71.990.000₫ ₫",
        id: "product-11"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/6/5/637269501975415139_mb-pro-13-2020-xam-dd.png",
        name: "Macbook Pro 15",
        price: "50.590.000 ₫",
        priceSale: "52.490.000 ₫",
        id: "product-12"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/31/636948957624237933_macbook-pro--touch-bar-2019-dd.png",
        name: "Macbook Pro 13",
        price: "31.490.000 ₫",
        priceSale: "34.490.000 ₫",
        id: "product-13"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/2/636688207026520043_mabookair-1o.png",
        name: "Macbook Air 13",
        price: "18.990.000₫",
        priceSale: "21.990.000 ₫",
        id: "product-14"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/11/637221970108314570_macbook-air-13-2019-gold-dd.png",
        name: "Macbook Air 11",
        price: "21.499.000 ₫",
        priceSale: "24.490.000 ₫",
        priceSale: "28.490.000 ₫",
        id: "product-15"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/12/637012257235983478_dell-inspiron-n7591-bac-dd.png",
        name: "Dell Inspiron N5391",
        price: "25.990.000 ₫",
        priceSale: "26.490.000 ₫",
        id: "product-16"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/10/30/637080249231935669_dell-vostro-v3590-den-dd.png",
        name: "Dell Inspiron V3590",
        price: "16.990.000 ₫",
        priceSale: "17.490.000 ₫",
        id: "product-17"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/10/30/637080260545554055_dell-n5593-bac-dd.png",
        name: "Dell Inspiron N3493",
        price: "15.090.000 ₫",
        priceSale: "15.590.000 ₫",
        id: "product-18"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/6/17/636963880700113211_dell-inspiron-n3480-bac-dd.png",
        name: "Dell Inspiron N3481",
        price: "11.790.000 ₫",
        priceSale: "12.290.000 ₫",
        id: "product-19"
    },
    {
        a: "./mb.html",
        img: "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/3/4/637189395685735237_dell-inspiron-n3493-den-dd.png",
        name: "Dell Inspiron N3477",
        price: "10.590.000 ₫",
        priceSale: "10.990.000 ₫",
        id: "product-20"
    },
]

localStorage.setItem("dataMobile", JSON.stringify(dataMobile));
localStorage.setItem("dataLaptop", JSON.stringify(dataLaptop));

let newData = JSON.parse(localStorage.getItem("dataMobile"));
let newData1 = JSON.parse(localStorage.getItem("dataLaptop"));

function dataList(dataBase, idElement) {
    let html = ''
    for (let data of dataBase) {
        html += ` <div class="mb-form">
    <a href="${data.a}">
        <img
        src="${data.img}"></br></br>
        <p>${data.name} </p>
        <p class="price">
        <strong>${data.price}</strong></br>
        <s>${data.priceSale}</s>
        </p>
    </a>
    <p class="add">
        <button onclick="addCart('${data.id}')" data-arg1="${data.id} " id="${data.id}">
        <strong>Thêm vào giỏ </strong>
        </button>
    </p>
    </div>`
    }
    document.getElementById(`${idElement}`).innerHTML = html
}
dataList(newData, "mobile")
dataList(newData1, "laptop")






function addCart(idd) {
    const checkCart = localStorage.getItem('gioHang');
    if (checkCart) {
        const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
        gioHangStorage.push(idd)
        localStorage.setItem('gioHang', JSON.stringify(gioHangStorage));
        document.getElementById('listGio').innerHTML = gioHangStorage.length;
        alert("Đã thêm vào giỏ hàng")
    }
    else {
        localStorage.setItem('gioHang', JSON.stringify([]))
    }


}
function setCart() {
    const gioHangStorage = [...JSON.parse(localStorage.getItem('gioHang'))];
    console.log(gioHangStorage)
    if (gioHangStorage) {
        document.getElementById('listGio').innerHTML = gioHangStorage.length;
    }

}
setCart();

// Giỏ hàng : gửi thông tin khách hàng
function onSubmitForm(event) {
    event.preventDefault();
    let customerForm = [];
    let customer = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        request: document.getElementById("request").value,
    };
    customerForm.push(customer);
    localStorage.setItem("customerForm", JSON.stringify(customerForm));
    showData();
}

function showData() {
    let jsonData = localStorage.getItem("customerForm");
    let customerForm = JSON.parse(jsonData);
    let html = `<ul>`;
    for (let form of customerForm) {
        html += `
                <li>
                    Name : <b>${form.name}</b></br>
                    Số điện thoại : <b>${form.phone}</b></br>
                    Địa chỉ  : <b>${form.address}</b></br>
                    Yêu cầu khác : <b>${form.request}</b></br>
                </li>
                    `;
    }
    html += `</ul>`;
    document.getElementById("app").innerHTML = html;
}

// item gio



// let number = document.getElementById("number");
// let cong = document.getElementById("cong");

// cong.addEventListener("click",function(){
//     let result = number.innerText;
//     result++ ;
//     number.innerText = result;
// })

//data-arg1="${data.id}