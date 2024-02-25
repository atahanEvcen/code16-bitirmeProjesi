# <"/code16>} YAZILIM AKADEMİSİ PROGRAMI BİTİRME PROJESİ
# BURSA KÜLTÜR ENVANTERİ HARİTASI

## Hazırlayan: Harita Mühendisi Atahan EVCEN

![Alt text](https://i.hizliresim.com/d72xbhi.png "a title")

## Proje Tanımı
Bu proje, Bursa'daki tarihi yapıları harita üzerinde görselleştirmek ve kullanıcılara bu yapılar hakkında bilgi sunmak amacıyla geliştirilmiştir. Projede odaklanılan yapılar arasında Han, Cami, Türbe ve Dikilitaş gibi tarihi öneme sahip yapılar bulunmaktadır.

Proje'nin vercel.com ortamındaki [çıktısı için tıklayın](https://code16-bitirme-projesi-bursa-kultur-envanteri.vercel.app/).

NOT: Proje'de kullanılan veriler arasında İznik/İnikli'de yer alan Dikilitaş'ın İnsansız Hava Aracı (İHA) Fotogrametrisi kullanılarak oluşturulmuş 3 Boyutlu Modeli de yer almaktadır. Bu veri de **Harita Mühendisi Atahan EVCEN** tarafından toplanıp işlenmiştir ve projeye entegre edilmiştir. İncelemeyi unutmayın.

## Kullanılan Teknolojiler
* React.JS: Kullanıcı arayüzü geliştirmek için React.JS kullanılmıştır.
* Vite: Projeyi hızlı bir şekilde geliştirmek ve derlemek için Vite kullanılmıştır.
* Tailwind CSS ve Bootstrap: Arayüz tasarımında kullanılan açık kaynak CSS çerçeveleridir.
* MapLibre GL JS: Mapbox GL nasıl çalışır?
Mapbox GL JS kullanan web uygulamalarında haritalar, JavaScript ve WebGL kullanılarak vektör döşemeleri stil kurallarıyla birleştirilerek dinamik olarak oluşturulur.
* İHA Fotogrametrisi (Arazide toplanan veriler Agisoft yazılımında işlenmiştir)
* Coğrafi Bilgi Sistemleri (QGIS)
* [CESIUM ion](https://cesium.com/platform/cesium-ion/) (3B Model bu platformda servis edilmiştir)

## Projeyi geliştirmek için kurulum adımları
1. Repoyu klonlayın: 
```
git clone https://github.com/atahanEvcen/code16-bitirmeProjesi.git
```
2. Gerekli bağımlılıkları yükleyin:
```
npm install
```
3. Projeyi Başlatın
```
npm run dev
```


## Veri Setleri
* Bursa Mahalle ve İlçe Sınır Verileri : [Bursa Açık Veri Portalı](https://acikyesil.bursa.bel.tr/)
* Tarihi Yapılar Veri Seti Manuel Olarak Oluşturulmuştur. [Kaynak için Tıklayınız](https://github.com/atahanEvcen/code16-bitirmeProjesi/blob/main/src/public/data/bursaTarihiYapi.json?short_path=a88fcd1)

## Kaynaklar

* Üretken Akademi - Code16 Temel Yazılım Programı Eğitim Videoları
* [React.JS](https://react.dev/learn)
* [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/examples/)
* [BootStrap](https://getbootstrap.com/)
* [Tailwindcss](https://tailwindcss.com/docs/installation)

## İletişim
e-mail: atahan.evcen16@gmail.com
