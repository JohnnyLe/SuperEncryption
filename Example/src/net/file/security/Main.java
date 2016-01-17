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
import java.util.Date;
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

    private static Encrypter encrypter=new Encrypter();
    private static Decrypter decrypter=new Decrypter();
    // AES Encrypttion key, could be changed dynamic as you needs
    private static String key="kmP45pYv8Og9H39ZrShz3IsxVSfKI5iM";
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        String inputPath = "D:/TESTFILE/test.pptx";
        String outputPath = "D:/TESTFILE/";
        long sratTime=new Date().getTime();
        EncryptMeta metadata=encrypter.docEncrypt(inputPath, outputPath, key);
        String fileName=decrypter.docDecrypt("D:/TESTFILE/test.encrypted", outputPath, key);
        long timeSpend = (new Date().getTime() - sratTime) / 1000;
        System.out.println("Time encrypting file:" + timeSpend + " seconds");

    }    
    
}
