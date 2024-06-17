#!/bin/bash

# Meminta input direktori sumber dari pengguna
read -p "Masukkan lokasi direktori yang berisi folder dan file: " source_directory

# Meminta input string direktori tujuan dari pengguna
read -p "Masukkan string lokasi direktori tujuan (contoh: /website-cloner/results): " destination_string

# Membangun path lengkap untuk direktori tujuan berdasarkan $HOME dan string yang diberikan
destination="$HOME${destination_string}"

# Validasi direktori tujuan
if [ ! -d "$destination" ]; then
    echo "Direktori tujuan tidak valid atau tidak ditemukan: $destination"
    exit 1
fi

# Memastikan direktori sumber valid
if [ ! -d "$source_directory" ]; then
    echo "Direktori sumber tidak valid atau tidak ditemukan: $source_directory"
    exit 1
fi

# Memindahkan semua konten dari direktori sumber ke direktori tujuan
mv "$source_directory"/* "$destination/"
echo "Semua konten dari '$source_directory' berhasil dipindahkan ke '$destination'."

echo "Proses pemindahan selesai."

