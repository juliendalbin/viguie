-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: viguie
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `idclient` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `adresse1` varchar(45) DEFAULT NULL,
  `adresse2` varchar(45) DEFAULT NULL,
  `cp` varchar(45) DEFAULT NULL,
  `ville` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `fixe` varchar(45) DEFAULT NULL,
  `portable` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idclient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colis`
--

DROP TABLE IF EXISTS `colis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colis` (
  `idcolis` int(11) NOT NULL,
  `nomColis` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idcolis`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colis`
--

LOCK TABLES `colis` WRITE;
/*!40000 ALTER TABLE `colis` DISABLE KEYS */;
/*!40000 ALTER TABLE `colis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commande`
--

DROP TABLE IF EXISTS `commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commande` (
  `idcommande` int(11) NOT NULL AUTO_INCREMENT,
  `dateCommande` varchar(45) DEFAULT NULL,
  `dateLivraison` varchar(45) DEFAULT NULL,
  `lieuLivraison` varchar(45) DEFAULT NULL,
  `quantite` varchar(45) DEFAULT NULL,
  `client_idclient` int(11) NOT NULL,
  `colis_idcolis` int(11) NOT NULL,
  PRIMARY KEY (`idcommande`,`client_idclient`,`colis_idcolis`),
  KEY `fk_commande_client_idx` (`client_idclient`),
  KEY `fk_commande_colis1_idx` (`colis_idcolis`),
  CONSTRAINT `fk_commande_client` FOREIGN KEY (`client_idclient`) REFERENCES `mydb`.`client` (`idclient`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_colis1` FOREIGN KEY (`colis_idcolis`) REFERENCES `mydb`.`colis` (`idcolis`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commande`
--

LOCK TABLES `commande` WRITE;
/*!40000 ALTER TABLE `commande` DISABLE KEYS */;
/*!40000 ALTER TABLE `commande` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-26 14:32:28
