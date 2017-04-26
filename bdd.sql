-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema viguie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema viguie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `viguie` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema viguie
-- -----------------------------------------------------
USE `viguie` ;

-- -----------------------------------------------------
-- Table `viguie`.`client`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `viguie`.`client`;

CREATE TABLE IF NOT EXISTS `viguie`.`client` (
  `idclient` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `prenom` VARCHAR(45) NULL,
  `adresse1` VARCHAR(45) NULL,
  `adresse2` VARCHAR(45) NULL,
  `cp` VARCHAR(45) NULL,
  `ville` VARCHAR(45) NULL,
  `mail` VARCHAR(45) NULL,
  `fixe` VARCHAR(45) NULL,
  `portable` VARCHAR(45) NULL,
  `hash` VARCHAR(60) NULL,
  PRIMARY KEY (`idclient`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `viguie`.`colis`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `viguie`.`colis`;

CREATE TABLE IF NOT EXISTS `viguie`.`colis` (
  `idcolis` INT NOT NULL AUTO_INCREMENT,
  `nomColis` VARCHAR(45) NULL,
  `description` VARCHAR(300) NULL,
  PRIMARY KEY (`idcolis`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `viguie`.`commande`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `viguie`.`commande`;

CREATE TABLE IF NOT EXISTS `viguie`.`commande` (
  `idcommande` INT NOT NULL AUTO_INCREMENT,
  `dateCommande` DATE NULL,
  `dateLivraison` DATE NULL,
  `lieuLivraison` VARCHAR(45) NULL,
  `quantite` INT NULL,
  `client_idclient` INT NOT NULL,
  `colis_idcolis` INT NOT NULL,
  PRIMARY KEY (`idcommande`, `client_idclient`, `colis_idcolis`),
  INDEX `fk_commande_client_idx` (`client_idclient` ASC),
  INDEX `fk_commande_colis1_idx` (`colis_idcolis` ASC),
  CONSTRAINT `fk_commande_client`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `viguie`.`client` (`idclient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commande_colis1`
    FOREIGN KEY (`colis_idcolis`)
    REFERENCES `viguie`.`colis` (`idcolis`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;