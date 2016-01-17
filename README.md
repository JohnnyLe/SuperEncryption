# SuperEncryption
SuperEncryption is FREE lightweight and powerful library for encryption &amp; decryption digital content, support any file type from Movie, Audio to eBook, document etc.

## Key Features
- Support any file type (from movie, audio, ebook, document ...)
- High security with AES Encryption algorithm
- High performance encryption & decryption
- Lightweight and powerful library built from scratch, so can use both in Server & Mobile client or re-write to other language.
- Optimized memory usage for encryption & decryption
- Encryption file size does not increase compare with original file size (Due to multiple block bytes have been compressed during encrypting)
 
## Online Demo
- http://johnnyle.github.io/SuperEncryption

## Library Dependency 
- Requires Java Cryptography Extension enable http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html
 

## How to use
 - Just included jar library ```SuperEncryption-1.0.jar``` into your project. Please check in example code at https://github.com/JohnnyLe/SuperEncryption/tree/master/Example, It's very simple to use
 ```java
    
    private static Encrypter encrypter=new Encrypter();
    private static Decrypter decrypter=new Decrypter();
    // AES Encrypttion key, could be changed dynamic as you needs
    private static String key="kmP45pYv8Og9H39ZrShz3IsxVSfKI5iM";
    
    /**
     * Example
     */
    public static void main(String[] args) throws IOException {
        String inputPath = "D:/TESTFILE/test.pptx";
        String outputPath = "D:/TESTFILE/";
        EncryptMeta metadata=encrypter.docEncrypt(inputPath, outputPath, key);
        String fileName=decrypter.docDecrypt("D:/TESTFILE/test.encrypted", outputPath, key);

    }   
 ```

 - Contribute
  - For any question/ bug or feedback please feel free to open issue at https://github.com/JohnnyLe/SuperEncryption/issues 

 - Roadmap 
  - Support .NET C#
  - TBD
