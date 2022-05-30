module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      custom: ['Custom', 'sans-serif'],
      body: ['Custom', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'water-pattern':
          "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d75ebft-c7b19fe1-d302-4940-8058-edd9506e76f1.png/v1/fill/w_1024,h_576,q_80,strp/water_pokemon_energy_wallpaper_by_elbarnzo_d75ebft-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzVlYmZ0LWM3YjE5ZmUxLWQzMDItNDk0MC04MDU4LWVkZDk1MDZlNzZmMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KGHRpsGuwKfL-K7CK7KDq-4QNxgcQjZpHVe-oWdlUfg')",
        'fire-pattern':
         "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d7519pz-cab4cca0-3856-4a70-87d1-d5d809d9c0e4.png/v1/fill/w_444,h_250,q_70,strp/fire_pokemon_energy_wallpaper_by_elbarnzo_d7519pz-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzUxOXB6LWNhYjRjY2EwLTM4NTYtNGE3MC04N2QxLWQ1ZDgwOWQ5YzBlNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1wpXy6FOa9BuS5AvxG7mGhtiW4JklHRo1pBwq3rgBWs)",
        'electric-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74n7g8-d9e08cee-3a8d-45c4-b2bc-127d4839ea1c.png/v1/fill/w_444,h_250,q_70,strp/electric_pokemon_energy_wallpaper_by_elbarnzo_d74n7g8-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRuN2c4LWQ5ZTA4Y2VlLTNhOGQtNDVjNC1iMmJjLTEyN2Q0ODM5ZWExYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XBz_pjUjkNv02DCfS1bO_eEQTRwg4wTaAJWjBsxgvEA)",
        'normal-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74i220-46efb57c-f214-4bf0-bb43-52a4c76d765a.png/v1/fill/w_444,h_250,q_70,strp/colorless_pokemon_energy_wallpaper_by_elbarnzo_d74i220-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRpMjIwLTQ2ZWZiNTdjLWYyMTQtNGJmMC1iYjQzLTUyYTRjNzZkNzY1YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aeJA2dIg_vxBjo017xcLmBpOm8SGPacNXjUiXf-9euU)",
        'bug-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dajncbl-45c25a96-dbb4-4ad8-a823-fea773839227.png/v1/fill/w_444,h_250,q_70,strp/bug_type_pokemon_wallpaper_by_elbarnzo_dajncbl-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFqbmNibC00NWMyNWE5Ni1kYmI0LTRhZDgtYTgyMy1mZWE3NzM4MzkyMjcucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UF6DZZs0A41kP5g9AuhlKxo0of_RJH6cZh1T0hFLvWA)",
        'fighting-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74vo4c-5a80d30d-5b83-4986-ae83-15638f686b0c.png/v1/fill/w_444,h_250,q_70,strp/fighting_pokemon_energy_wallpaper_by_elbarnzo_d74vo4c-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzR2bzRjLTVhODBkMzBkLTViODMtNDk4Ni1hZTgzLTE1NjM4ZjY4NmIwYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._fQP2_Wt_tdMdsFSwFjWQVqtyLJrxX5NZAV1BMeskYk)",
        'grass-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d755hbj-2a350c33-b053-497e-aa3e-26b9908bcb83.png/v1/fill/w_444,h_250,q_70,strp/grass_pokemon_energy_wallpaper_by_elbarnzo_d755hbj-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzU1aGJqLTJhMzUwYzMzLWIwNTMtNDk3ZS1hYTNlLTI2Yjk5MDhiY2I4My5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.b2e4tYA7xn1Gr32PuQMO5lKremR6QGg8uohiTOBa29Y)",
        'psychic-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d759r4f-8c6f09ca-6e05-4de6-8da8-758a40523c94.png/v1/fill/w_444,h_250,q_70,strp/physic_pokemon_energy_wallpaper_by_elbarnzo_d759r4f-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzU5cjRmLThjNmYwOWNhLTZlMDUtNGRlNi04ZGE4LTc1OGE0MDUyM2M5NC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qIQ_7BaTvnPAaM2radqKN6l6DL-Q9uPic7diPg_BFnE)",
        'dragon-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dak4w59-4543ab66-519a-4fd1-9391-0cd0cd4b358f.png/v1/fill/w_444,h_250,q_70,strp/dragon_type_pokemon_wallpaper_by_elbarnzo_dak4w59-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFrNHc1OS00NTQzYWI2Ni01MTlhLTRmZDEtOTM5MS0wY2QwY2Q0YjM1OGYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T0AarPj45HLFnGjxoWd8vzlbFY8WOzUOiVDJGTRgLAw)",
        'ground-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2ame-7e0f56b2-2587-47db-8e2b-0429d1f40a80.png/v1/fill/w_444,h_250,q_70,strp/ground_type_pokemon_wallpaper_by_elbarnzo_dbi2ame-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmFtZS03ZTBmNTZiMi0yNTg3LTQ3ZGItOGUyYi0wNDI5ZDFmNDBhODAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.p-YGmaWlanAgM3JYZB6Msy9dfZxGhsKgamTJBE9wVxM)",
        'poison-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2b02-f19f2e42-b157-4986-a49a-e8bdaabf12f0.png/v1/fill/w_444,h_250,q_70,strp/poison_type_pokemon_wallpaper_by_elbarnzo_dbi2b02-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmIwMi1mMTlmMmU0Mi1iMTU3LTQ5ODYtYTQ5YS1lOGJkYWFiZjEyZjAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1G4SNh8cSxMoGlBllqxOu0-wZzEpbmfSB1KgUo1R298)",
        'rock-pattern':
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2b77-23f7e283-8756-4668-888a-b37605581478.png/v1/fill/w_444,h_250,q_70,strp/rock_type_pokemon_wallpaper_by_elbarnzo_dbi2b77-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmI3Ny0yM2Y3ZTI4My04NzU2LTQ2NjgtODg4YS1iMzc2MDU1ODE0NzgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tGUUOCZT4jWZnMB1I0bEUs5z3QDosNMRF3cigwp2gEQ)",
        "fairy-pattern":
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/daoarj9-eeca0f14-698f-4ddb-9083-dadc70f35dc2.png/v1/fill/w_622,h_350,q_70,strp/fairy_type_pokemon_wallpaper_by_elbarnzo_daoarj9-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFvYXJqOS1lZWNhMGYxNC02OThmLTRkZGItOTA4My1kYWRjNzBmMzVkYzIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Jw30FdRyCdz3sQcL3bjbbpXUsN3iZOUr6EFg-YUuTQk)",
      },
    },
  },
  plugins: [],
};
