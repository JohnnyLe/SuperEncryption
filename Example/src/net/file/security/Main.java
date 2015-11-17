/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.file.security;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import net.superencryption.Decrypter;
import net.superencryption.Encrypter;
import net.superencryption.model.EncryptMeta;

/**
 *
 * @author JohnnyLe
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        // input file path to encrypt
        String pathFileInut="D:\\Project\\SuperEncryption\\Example\\testmp4.mp4";
        // output path for encrypted file
        String outputPath="D:\\Project\\SuperEncryption\\Example";
        
        // input file path to decode
        String pathFilDecode="D:\\Project\\SuperEncryption\\Example\\testmp4.mp4.encrypted";
        // Call encrypt file
        new Encrypter().docEncrypt(pathFileInut, outputPath);
        
        // Call decrypt file
        new Decrypter().docDecrypt(pathFilDecode, outputPath);

    }    
    
}
